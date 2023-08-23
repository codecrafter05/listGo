import { useState } from 'react';


export default function TaskNotes() {

    const [notes, setNotes] = useState('');

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
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