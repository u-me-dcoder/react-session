import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Formik } from "formik";
import {AddQuestionSchema} from '../../schema/FormSchema'
import {connect} from 'react-redux'
import { addQuestion } from "../../store/actions/category";
 function AddQuestion(props) {
    let {id,isOpen,handleModalState,addQuestion}= props


  return (
    <div>
      <Modal isOpen={isOpen} toggle={handleModalState}>
        <ModalHeader toggle={handleModalState}>Add Question</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              title: "",
              answer: "",
              level: "begineer",
            }}
            validationSchema={AddQuestionSchema}
            onSubmit={(values, props) => {
              addQuestion(id,values).then((response)=>{
                console.log('promise response',response)
              })
                props.resetForm();
                handleModalState()
            }}
           
          >
            {(props) => {
              let {
                values,
                handleSubmit,
                handleChange,
          
                errors,
                handleBlur,
                touched,
              } = props;

              let { title,answer,level } = values;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Question title</label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                    />
                    {touched.title && errors.title && (
                      <span style={{ color: "red" }}>{errors.title}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Answer</label>
                    <input
                      type="text"
                      name="answer"
                      value={answer}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                    />
                    {touched.answer && errors.answer && (
                      <span style={{ color: "red" }}>{errors.answer}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="level">Select Level</label>
                    <select name="level" id="level" className="custom-select" value={level} onChange={handleChange} onBlur={handleBlur} >
                      <option value="begineer">
                        Begineer
                      </option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </select>
                    {touched.level && errors.level && (
                      <span style={{ color: "red" }}>{errors.level}</span>
                    )}
                  </div>

                  <button className="btn btn-primary">Submit</button>
                </form>
              );
            }}
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default connect(null,{addQuestion})(AddQuestion)