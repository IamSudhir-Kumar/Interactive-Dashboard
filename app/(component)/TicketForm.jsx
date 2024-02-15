"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
    const router = useRouter();
    const [ticketData, setTicketData] = useState({
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "bug",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicketData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("../api/Tickets", {
            method: "POST",
            body: JSON.stringify({ tickData }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            console.log("error");
        }
        router.refresh();
        router.push("/");
    };

    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
                <h3>Create Your Ticket</h3>
                <label>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={ticketData.title}
                />
                <label>Description</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                    required={true}
                    value={ticketData.description}
                    rows={5}
                />
                <label>Category</label>
                <select name="category" value={ticketData.category} onChange={handleChange}>
                    <option value="bug">Bug</option>
                    <option value="feature">Feature</option>
                    <option value="enhancement">Enhancement</option>
                </select>

                <label>Priority</label>
                <div>
                    {[1, 2, 3, 4, 5].map((priority) => (
                        <React.Fragment key={priority}>
                            <input
                                type="radio"
                                name="priority"
                                value={priority}
                                onChange={handleChange}
                                checked={ticketData.priority === priority}
                            />
                            <label>{priority}</label>
                        </React.Fragment>
                    ))}
                </div>

                <label>Progress</label>
                <input
                    type="range"
                    id="progress"
                    name="progress"
                    min={0}
                    max={100}
                    value={ticketData.progress}
                    onChange={handleChange}
                />

                <label>Status</label>
                <select name="status" value={ticketData.status} onChange={handleChange}>
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <input type="submit" className="btn" value="Create Ticket" />
            </form>
        </div>
    );
};

export default TicketForm;
