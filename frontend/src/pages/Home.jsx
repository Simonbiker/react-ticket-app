import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className='heading'>
                <h1>What do you need help with</h1>
                <p>Please choose from option below</p>
            </section>
            <Link to='/new-tickets' className='btn btn-reverse btn-block'>
                <FaQuestionCircle /> Create a new ticket
            </Link>
            <Link to='/tickets' className='btn btn-block'>
                <FaTicketAlt />View my Tickets
            </Link>
        </>
    )
}

export default Home