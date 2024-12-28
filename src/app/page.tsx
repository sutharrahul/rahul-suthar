import Clock from '@/components/Clock'
import Footer from '@/components/Footer'
import { TracingBeam } from '@/components/ui/tracing-beam'
import data from '../data/index.json'
import Profile from '@/components/Profile'
import Experiance from '@/components/Experiance'
import Project from '@/components/Project'

export default function Home() {
    const { profile, experiences, projects } = data
    return (
        <div className="mx-auto max-w-[580px]">
            <TracingBeam className="px-5 sm:px-10 md:px-0">
                <div className="px-4 pt-20 sm:pt-28">
                    <Profile profile={profile} />
                    <Experiance experiences={experiences} />
                    <Project projects={projects} />
                    <Footer />
                </div>
                <Clock />
            </TracingBeam>
        </div>
    )
}
