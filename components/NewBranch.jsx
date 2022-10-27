import React from "react";
function NewBranch() {
  // const [name,setname]=useState("");

  return (
    <>
      <div className=" Main ">
        <div className="title">
          <h1 className="Topic"> Add New Branch</h1>
          <p className="Subtopic"> Branches &gt; New</p>
        </div>

        <div className="container branch Main-container p-4 bg-white pt-5 mb-4 rounded-4 ">
          <div className="row mb-3 ">
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="branchName" class="form-label">
                  Branch Name<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="text"
                  class="form-control"
                  id="inputBranchName"
                  placeholder="Enter Branch Name"
                  aria-describedby="branchName"
                />
              </div>
            </div>
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="branchCode" class="form-label">
                  Branch Code<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="text"
                  class="form-control"
                  id="inputBranchCode"
                  placeholder="Enter Branch Code Like 'BRH001'"
                  aria-describedby="branchCode"
                />
              </div>
            </div>
          </div>
          <div className="row  mb-3 ">
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="openDate" class="form-label">
                  Open Date<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="date"
                  class="form-control"
                  id="inputOpenDate"
                  aria-describedby="openDate"
                />
              </div>
            </div>
            <div className="col row mb-3">
              <div className="col-sm-4">
                {/* Label */}
                <label for="ifscCode" class="form-label">
                  IFSC Code
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="text"
                  class="form-control"
                  id="inputIfscCode"
                  placeholder="Enter IFSC Code"
                  aria-describedby="ifscCode"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="addressLine1" class="form-label">
                  Address Line 1<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress "
                  placeholder="Enter Address Line 1"
                  aria-describedby="addressLine"
                />
              </div>
            </div>
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="addressLine2" class="form-label">
                  Address Line 2<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="text"
                  class="form-control"
                  id="einputAddress"
                  placeholder="Enter Address Line 2"
                  aria-describedby="addressLine"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="cityName" class="form-label">
                  City<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  placeholder="Enter City"
                  aria-describedby="cityName"
                />
              </div>
            </div>
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="stateNAme" class="form-label">
                  State<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="dropdown-list"
                  class="form-control"
                  id="inputState"
                  placeholder="Enter State"
                  aria-describedby="stateName"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="pinCode" class="form-label">
                  PIN Code<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="number"
                  class="form-control"
                  id="inputPinCode"
                  placeholder="Enter PIN Code"
                  aria-describedby="pinCode"
                />
              </div>
            </div>
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="countryName" class="form-label">
                  Country<span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="text"
                  class="form-control"
                  id="countryName"
                  placeholder="Enter Country"
                  aria-describedby="countryName"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="contactEmail" class="form-label">
                  Contact Email
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="text"
                  class="form-control"
                  id="inputContactEmail"
                  placeholder="Enter Branch Contact Email"
                  aria-describedby="contactEmail"
                />
              </div>
            </div>
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="contactNumber" class="form-label">
                  Contact Number
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="number"
                  class="form-control"
                  id="inputContactNumber"
                  placeholder="Enter Branch Contact Number"
                  aria-describedby="contactNumber"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label for="landlineNUmber" class="form-label">
                  LandLIne Number
                </label>
              </div>
              <div className="branch_col">
                {/*Text-field*/}
                <input
                  type="number"
                  class="form-control"
                  id="inputLandlineNumber"
                  placeholder="Enter Branch Landline Number"
                  aria-describedby="landlineNumber"
                />
              </div>
            </div>
            <div className="col row">
              <div className="col-sm-4">{/*blank*/}</div>
              <div className="branch_col">{/*blank*/}</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label
                  for="disableRecharge/BillPaymentService"
                  class="form-label"
                >
                  Disable Recharge / Bill Payment Service
                  <span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Radio button*/}
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  No
                </label>
              </div>
            </div>
            <div className="col row">
              <div className="col-sm-4">
                {/* Label */}
                <label
                  for="disableNEFT/IMPS/WITHINTransferService"
                  class="form-label"
                >
                  Disable NEFT/IMPS/WITHIN Transfer Service
                  <span className="red-color">*</span>
                </label>
              </div>
              <div className="branch_col">
                {/*Radio button*/}
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio1">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="bottom">
            <button type="button" class="btn btn-success button ">
              SAVE BRANCH
            </button>
            <button type="button" class="btn btn-danger button">
              CANCEL
            </button>
            <button type="button" class="btn btn-warning  button ">
              RESET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewBranch;
