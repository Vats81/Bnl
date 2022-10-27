import React from "react";

function Branches() {
  return (
    <div className="table-responsive" id="noMoreTables">
      <table class="table  ">
        <thead
          class=" align-middle"
          style={{ backgroundColor: "#E11C3A", color: "#ffff" }}
        >
          <tr>
            <th scope="col">BRANCH NAME</th>
            <th scope="col">BRANCH CODE</th>
            <th scope="col">CITY</th>
            <th scope="col">STATE</th>
            <th scope="col">OPENING DATE</th>
            <th scope="col">MEMBERS</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody class="table-light align-middle">
          <tr>
            <td data-title="BRANCH NAME">dumka</td>
            <td data-title="BRANCH CODE">001</td>
            <td data-title="CITY">Dumka</td>
            <td data-title="STATE">Jharkhand</td>
            <td data-title="OPENING DATE">22-Jan-2022</td>
            <td data-title="MEMBERS">me</td>
            <td data-title="ACTIONS">a</td>
          </tr>
        </tbody>
        <tbody class="table-light align-middle">
          <tr>
            <td data-title="BRANCH NAME">dumka</td>
            <td data-title="BRANCH CODE">001</td>
            <td data-title="CITY">Dumka</td>
            <td data-title="STATE">Jharkhand</td>
            <td data-title="OPENING DATE">22-Jan-2022</td>
            <td data-title="MEMBERS">me</td>
            <td data-title="ACTIONS">a</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Branches;
