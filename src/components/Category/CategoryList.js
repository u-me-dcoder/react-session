import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import QuestionList from "../Questions/QuestionList";
import AddQuestion from "../Questions/AddQuestion";
import { connect } from "react-redux";
import { setTextFilter,setLevelFilter } from "../../store/actions/filter";
function CategoryList(props) {
  const [activeTab, setActiveTab] = useState("1");

  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  let { categories, filter, setTextFilter,setLevelFilter } = props;
  let { text, level} = filter;

  let addQuestion = (id) => {
    setId(id);
    setModal(!modal);
  };

  let changeModalState = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="container">
        <div className="form-group">
          <label>Filter Text</label>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setTextFilter(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Filter Level</label>
          <select name="" id="" className="custom-select" value={level} onChange={e =>setLevelFilter(e.target.value)}>
            <option value="" disabled></option>
            <option value="begineer">Begineer</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
      </div>

      <AddQuestion
        isOpen={modal}
        handleModalState={changeModalState}
        id={id}
      />
      <Nav tabs>
        {categories.map((item, index) => {
          let tabValue = index + 1;
          tabValue = tabValue.toString();

          return (
            <NavItem key={item._id}>
              <NavLink
                className={classnames({ active: activeTab === tabValue })}
                onClick={() => {
                  toggle(tabValue);
                }}
              >
                {item.name}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={activeTab}>
        {categories.map((item, index) => {
          let tabValue = index + 1;
          tabValue = tabValue.toString();

          return (
            <TabPane tabId={tabValue} key={item._id}>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => addQuestion(item._id)}
                >
                  Add Question
                </button>
                <QuestionList bank={item.bank} />
              </div>
            </TabPane>
          );
        })}
      </TabContent>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { setTextFilter,setLevelFilter })(CategoryList);

//a =state ko data
//b = list of actions
