import React, { useState } from "react";
import Branches from "./Branches";
import NewAccount from "./NewAccount";
import NewBranch from "./NewBranch";

function ContentBox() {
  const [currentState, setState] = useState(1);
  const handleState = (e) => {
    setState(e);
  };
  return (
    <main>
      <div
        className="px-2 pt-4 d-flex flex-column overflow-hidden"
        style={{ backgroundColor: "#D2CDED", marginTop: "3.1rem !important" }}
      >
        <div className="top_nav d-flex  align-items-center  ">
          <div
            className={
              currentState === 2
                ? "branch actBtn d-flex list-unstyled px-3"
                : "branch d-flex list-unstyled px-3"
            }
          >
            <div className="branch_Text">
              <h6 className="m-0">Branches</h6>
            </div>
            <div
              className={
                currentState === 2
                  ? "branch_Icon cursor-pointer active  px-2"
                  : "branch_Icon px-2"
              }
              onClick={() => handleState(2)}
            >
              <li>
                <i class="fa-solid fa-circle-plus"></i>
              </li>
            </div>
          </div>
          <div
            className={
              currentState === 3
                ? "branch actBtn d-flex list-unstyled px-3"
                : "branch   d-flex list-unstyled px-3"
            }
          >
            <div className="branch_Text">
              <h6 className="m-0">New Account</h6>
            </div>
            <div
              className={
                currentState === 3
                  ? "branch_Icon cursor-pointer active px-2"
                  : "branch_Icon px-2"
              }
              onClick={() => handleState(3)}
            >
              <li>
                <i class="fa-solid fa-circle-plus"></i>
              </li>
            </div>
          </div>
        </div>
        <div
          className={
            currentState === 1
              ? "new_Account_form active mt-5 "
              : "new_Account_form d-none mt-5 "
          }
        >
          <Branches />
        </div>
        <div
          className={
            currentState === 2
              ? "new_Account_form active mt-5 "
              : "new_Account_form d-none mt-5 "
          }
        >
          <NewBranch />
        </div>
        <div
          className={
            currentState === 3
              ? "new_Branch_form active mt-5 "
              : "new_Branch_form d-none mt-5 "
          }
        >
          <NewAccount />
        </div>
      </div>
    </main>
  );
}
export default ContentBox;
