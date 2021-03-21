import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy';

const SubmitCard = () => {
    const updateCardName = useStoreActions(actions => actions.updateCardName);
    const onChangeCardName = useCallback(
        (e) => updateCardName(e.target.value),
        [updateCardName],
    );
 
    const updateCardBrand = useStoreActions(actions => actions.updateCardBrand);
    const onChangeCardBrand = useCallback(
        (e) => updateCardBrand(e.target.value),
        [updateCardBrand],
    );

    const updateCardYear = useStoreActions(actions => actions.updateCardYear);
    const onChangeCardYear = useCallback(
        (e) => updateCardYear(e.target.value),
        [updateCardYear],
    );

    const updateCardDescription = useStoreActions(actions => actions.updateCardDescription);
    const onChangeCardDescription = useCallback(
        (e) => updateCardDescription(e.target.value),
        [updateCardDescription],
    );

    const updateCardGradeCompany = useStoreActions(actions => actions.updateCardGradeCompany);
    const onChangeCardGradeCompany = useCallback(
        (e) => updateCardGradeCompany(e.target.value),
        [updateCardGradeCompany],
    );

    const updateCardGrade = useStoreActions(actions => actions.updateCardGrade);
    const onChangeCardGrade = useCallback(
        (e) => updateCardGrade(e.target.value),
        [updateCardGrade],
    );

    const submitCard = useStoreActions(actions => actions.submitCard);
    const onSubmitClick = useCallback(
        () => submitCard().catch((error) => console.error(error)),
        [submitCard],
    );

    return (
      <div className="input-container flex flex-col justify-center items-center mt-0">
        <h1 className="page-heading">Submit Card</h1>
        
        <input id="name" name="name" type="text" placeholder="Name/Team" onChange={onChangeCardName} />
        <input id="brand" name="brand" type="text" placeholder="Brand/Collection" onChange={onChangeCardBrand} />
        <input id="year" name="year" type="text" placeholder="Year" onChange={onChangeCardYear} />
        <textarea id="description" name="description" rows="3" placeholder="Description" onChange={onChangeCardDescription} />
        <input id="gradeCompany" name="gradeCompany" type="text" placeholder="Grading Company" onChange={onChangeCardGradeCompany} />
        <input id="grade" name="grade" type="text" placeholder="Grade" onChange={onChangeCardGrade} />
        <button className="default-btn w-11/12 sm:w-1/3 mt-4 theme-color text-base sm:text-xl" onClick={onSubmitClick}>Send</button>
      </div>
  )
}

export default SubmitCard
