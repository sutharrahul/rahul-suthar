'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Bot, Send, User } from 'lucide-react'
import { streamQuery, ApiError, MAX_QUESTION_LENGTH } from '@/lib/api'
import type { ChatMessage } from '@/lib/types'
import { cn } from '@/lib/utils'

const SUGGESTIONS = [
  'What has Rahul built?',
  'What are his core skills?',
  'Is he open to freelance work?',
]

export function ChatWidget() {
  const [sessionId] = useState(() => crypto.randomUUID())
  const [chatId, setChatId] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isLoading])

  async function sendMessage(question: string) {
    const trimmed = question.trim()
    if (!trimmed || isLoading) return

    const assistantId = crypto.randomUUID()
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: 'user', content: trimmed, createdAt: Date.now() },
      { id: assistantId, role: 'assistant', content: '', createdAt: Date.now() },
    ])
    setInput('')
    setIsLoading(true)

    try {
      for await (const event of streamQuery(sessionId, chatId, trimmed)) {
        if (event.type === 'token') {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: m.content + event.content } : m))
          )
        } else if (event.type === 'done') {
          setChatId(event.chat_id)
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, sources: event.sources } : m))
          )
        } else if (event.type === 'error') {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: event.message } : m))
          )
        }
      }
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Something went wrong. Please try again.'
      setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, content: message } : m)))
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="flex h-[520px] flex-col overflow-hidden rounded-3xl border border-border bg-background">
      <div className="flex items-center gap-3 border-b border-border p-4">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--purple)]">
          <Bot className="size-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Ask about Rahul</p>
          <p className="text-xs text-muted-foreground">AI assistant, trained on my portfolio</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
            <p className="text-sm text-muted-foreground">Ask anything about my experience, skills, or projects.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="rounded-xl border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[var(--purple)]/30 hover:text-[var(--purple)]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={cn('flex gap-2.5', message.role === 'user' ? 'justify-end' : 'justify-start')}>
              {message.role === 'assistant' && (
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[var(--purple)]/10">
                  <Bot className="size-3.5 text-[var(--purple)]" />
                </div>
              )}
              <div
                className={cn(
                  'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap',
                  message.role === 'user'
                    ? 'rounded-tr-sm bg-[var(--purple)] text-white'
                    : 'rounded-tl-sm bg-surface-1 text-foreground'
                )}
              >
                {message.content ? (
                  message.content
                ) : (
                  <span className="inline-flex gap-1">
                    <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-current" />
                  </span>
                )}
              </div>
              {message.role === 'user' && (
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <User className="size-3.5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, MAX_QUESTION_LENGTH))}
          placeholder="Ask a question..."
          disabled={isLoading}
          className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--purple)]/40 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          aria-label="Send message"
          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--purple)] text-white transition-colors hover:bg-[var(--purple-dark)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Send className="size-4" />
        </button>
      </form>
    </div>
  )
}
