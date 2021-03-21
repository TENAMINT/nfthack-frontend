import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useForm } from "react-hook-form";

export default function App() {
    const { register, handleSubmit } = useForm();
    const submitCard = useStoreActions(actions => actions.submitCard);
    const onSubmit = (data) => submitCard(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container flex flex-col justify-center items-center mt-0">
                <h1 className="page-heading">Submit Card</h1>

                <input id="name" name="name" type="text" placeholder="Name/Team" ref={register} />
                <input id="brand" name="brand" type="text" placeholder="Brand/Collection" ref={register} />
                <input id="year" name="year" type="text" placeholder="Year" ref={register} />
                <textarea id="description" name="description" rows="3" placeholder="Description" ref={register} />
                <input id="gradeCompany" name="gradeCompany" type="text" placeholder="Grading Company" ref={register} />
                <input id="grade" name="grade" type="text" placeholder="Grade" ref={register} />

                {/* <button  onClick={onSubmitClick}>Send</button> */}
                <input className="default-btn w-11/12 sm:w-1/3 mt-4 theme-color text-base sm:text-xl" type="submit" />

            </div>
        </form>
    );
}