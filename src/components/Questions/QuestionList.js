import React from 'react'

export default function QuestionList(props) {
    let {bank} = props
    let questionList = null
    if(bank.length!==0){

         questionList = bank.map(question=>{
            return (
                <li key={question._id}>
                    <h6>{question.title} </h6> <span>{question.level}</span> 
            <p>{question.answer}</p>

                </li>
            )
        })
    }
    return (
        <div>
            {bank.length===0 ? <h1>Add Questions</h1>: <ul>{questionList}</ul>}
        </div>
    )
}
