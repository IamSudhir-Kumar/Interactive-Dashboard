import DeleteBlock from "./DeleteBlock"
import ProgressBar from "./ProgressBar"
import ProiorityDisplay from "./ProiorityDisplay"
import StatusDisplay from "./StatusDisplay"

const TicketCard = () => {
    return (
        <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <ProiorityDisplay />
                <div className="ml-auto">
                    <DeleteBlock />
                </div>
            </div>
            <h4>Ticket Title</h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">This is the ticket description</p>

            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1">14/02/2024</p>
                    <ProgressBar />
                </div>
                <div className="ml-auto flex items-end">
                <StatusDisplay />
                </div>
                
            </div>

        </div>
    )
}

export default TicketCard