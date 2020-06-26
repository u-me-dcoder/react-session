import React, { Fragment, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,

} from "reactstrap";
import classnames from 'classnames';
import QuestionList from '../Questions/QuestionList'


export default function CategoryList(props) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  let { categories } = props;
  
  let addQuestion = id =>{
    console.log('this is the item id',id)
  }
  return (
    <Fragment>
      <div>
        <Nav tabs>

            {
                categories.map((item,index)=>{
                    let tabValue = index + 1
                    tabValue = tabValue.toString()
                 
                    return(
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
                    )
                })
            }
      
       
        </Nav>
        <TabContent activeTab={activeTab}>
            {categories.map((item,index)=>{
                console.log(item)
                   let tabValue = index + 1
                   tabValue = tabValue.toString()
                
                return(
                    <TabPane tabId={tabValue} key={item._id}>
                    <div>
                    <button className="btn btn-primary" onClick={()=>addQuestion(item._id)}>Add Question</button>
                        <QuestionList bank={item.bank}/>
                       
                    </div>
                  </TabPane>
                )
            })}

        </TabContent>
      
        
      </div>
    </Fragment>
  );
}
