import { useState } from 'react';

export default function TaskNotes() {
    const [notes, setNotes] = useState('');

    const handleNotesChange = async (event) => {
        const newNotes = event.target.value;
        setNotes(newNotes);

        // Send a request to the back-end to save the updated notes
        const response = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ notes: newNotes })
        });

        // Handle the response
        if (response.ok) {
            console.log('Notes updated successfully');
        } else {
            console.error('An error occurred while updating the notes');
        }
    };

    return (
        <>
            <hr className="task-line"></hr>
            <div className="task-desc">
                <div className="task-textarea">
                    <textarea
                        className="form-control"
                        placeholder="Notes"
                        value={notes}
                        onChange={handleNotesChange} />
                </div>
            </div>
        </>
    );
}
