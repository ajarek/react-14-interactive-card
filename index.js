class Card extends React.Component {
  state = {
    inputValueName: "",
    inputValueNumber: "",
    inputValueMonth: "",
    inputValueYear: "",
    inputValueCvc: "",
    forwardSlash: "",
    validateName: "",
    validateNumber: "",
    validateMonth: "",
    validateYear: "",
    validateCvc: "",
    validateAll: {
      name: false,
      number: false,
      month: false,
      year: false,
      cvc: false,
    },
    fullData: {
      valueName: "",
      valueNumber: "",
      valueMonth: "",
      valueYear: "",
      valueCvc: "",
    },
    class: "form",
    classBoard: "form-hide",
  };

  InputName = (e) => {
    this.setState({ inputValueName: e.target.value });
    setTimeout(() => {
      if (
        this.state.inputValueName.match(
          /^(?:[\u00c0-\u01ffa-zA-Z'-]){2,}(?:\s[\u00c0-\u01ffa-zA-Z'-]{2,})+$/i
        )
      ) {
        this.setState({ validateName: "Valid" });
        this.setState({
          validateAll: { ...this.state.validateAll, name: true },
        });
      } else {
        this.setState({
          validateName: "Invalid:only first name + space + last name",
        });
      }
    }, 0);
  };
  InputNumber = (e) => {
    this.setState({ inputValueNumber: e.target.value });
    setTimeout(() => {
      if (
        this.state.inputValueNumber.match(
          /^([0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4})/
        ) &&
        this.state.inputValueNumber.length === 19
      ) {
        this.setState({ validateNumber: "Valid" });
        this.setState({
          validateAll: { ...this.state.validateAll, number: true },
        });
      } else {
        this.setState({
          validateNumber: "Invalid:16 digits of the sequence 4 * 4 + space",
        });
      }
    }, 0);
  };
  InputMonth = (e) => {
    this.setState({ inputValueMonth: e.target.value });
    this.setState({ forwardSlash: "/" });
    setTimeout(() => {
      if (
        this.state.inputValueMonth.match(/^(0[1-9]|1[0-2])$/) &&
        this.state.inputValueMonth.length === 2
      ) {
        this.setState({ validateMonth: "Valid" });
        this.setState({
          validateAll: { ...this.state.validateAll, month: true },
        });
      } else {
        this.setState({ validateMonth: "2 digits from 01 to 12" });
      }
    }, 0);
  };
  InputYear = (e) => {
    this.setState({ inputValueYear: e.target.value });
    setTimeout(() => {
      if (
        this.state.inputValueYear.match(/^(2[3-9])$/) &&
        this.state.inputValueYear.length === 2
      ) {
        this.setState({ validateYear: "Valid" });
        this.setState({
          validateAll: { ...this.state.validateAll, year: true },
        });
      } else {
        this.setState({ validateYear: "2 digits from 23 to 29" });
      }
    }, 0);
  };
  InputCvc = (e) => {
    this.setState({ inputValueCvc: e.target.value });
    setTimeout(() => {
      if (
        this.state.inputValueCvc.match(/^([0-9]){3}$/) &&
        this.state.inputValueCvc.length === 3
      ) {
        this.setState({ validateCvc: "Valid" });
        this.setState({
          validateAll: { ...this.state.validateAll, cvc: true },
        });
      } else {
        this.setState({ validateCvc: "3 digits" });
      }
    }, 0);
  };
  

  saveValues = (e) => {
    e.preventDefault();
    if (
      this.state.validateAll.name &&
      this.state.validateAll.number &&
      this.state.validateAll.month &&
      this.state.validateAll.year &&
      this.state.validateAll.cvc
    ) {
      this.state.fullData.valueName = this.state.inputValueName;
      this.state.fullData.valueNumber = this.state.inputValueNumber;
      this.state.fullData.valueMonth = this.state.inputValueMonth;
      this.state.fullData.valueYear = this.state.inputValueYear;
      this.state.fullData.valueCvc = this.state.inputValueCvc;
    
    this.setState({ fullData: this.state.fullData });
    this.setState({ class: "form-hide" });
    this.setState({ classBoard: "boardData" });
    } else {
      this.setState({ class: "form" });
    }
  };

  refreshPage = (e) => {
    window.location.reload(false);
  };

  render() {
    return (
      <div className="container">
        <div className="container-left"></div>
        <div className="container-right">
          <div className={this.state.classBoard}>
            <img src="images/icon-complete.svg" alt="icon" />
            <h2>THANK YOU</h2>
            <div>We've added your card details</div>
            <ul>
              <li>name: {this.state.fullData.valueName}</li>
              <li> number card: {this.state.fullData.valueNumber}</li>
              <li>
                exp. date: {this.state.fullData.valueMonth}{" "}
                {this.state.forwardSlash} {this.state.fullData.valueYear}
              </li>
              <li>number Cvc: {this.state.fullData.valueCvc}</li>
            </ul>
            <button onClick={this.refreshPage}>Continue</button>
          </div>

          <form action="" className={this.state.class}>
            <label htmlFor="ownerDetails" className="form-label">
              NAME AND SURNAME OF THE CARD OWNER
            </label>
            <input
              onChange={this.InputName}
              value={this.state.inputValueName}
              type="text"
              className="form-control"
              id="ownerDetails"
            />
            <p>{this.state.validateName}</p>
            <label htmlFor="ownerDetails" className="form-label">
              CARD NUMBER
            </label>
            <input
              onChange={this.InputNumber}
              value={this.state.inputValueNumber}
              type="text"
              className="form-control"
              id="ownerDetails"
            />
            <p>{this.state.validateNumber}</p>
            <label htmlFor="ownerDetails" className="form-label">
              <span>EXP. DATE</span> <span>(MM/YY)</span> <span>CVC</span>
            </label>
            <div className="row">
              <div className="item">
                <input
                  onChange={this.InputMonth}
                  value={this.state.inputValueMonth}
                  type="text"
                  className="form-control"
                  id="month"
                />
                <p>{this.state.validateMonth}</p>
              </div>
              <div className="item">
                <input
                  onChange={this.InputYear}
                  value={this.state.inputValueYear}
                  type="text"
                  className="form-control"
                  id="year"
                />
                <p>{this.state.validateYear}</p>
              </div>
              <div className="item">
                <input
                  onChange={this.InputCvc}
                  value={this.state.inputValueCvc}
                  type="text"
                  className="form-control"
                  id="cvc"
                />
                <p>{this.state.validateCvc}</p>
              </div>
            </div>
            <button onClick={this.saveValues}>Confirm</button>
          </form>
        </div>
        <div className="card-awers">
          <div className="logo"></div>
          <div className="number-card">
            <span>{this.state.inputValueNumber}</span>
          </div>
          <div className="data-card">
            <span>{this.state.inputValueName}</span>
            <span>
              {this.state.inputValueMonth}
              {this.state.forwardSlash}
              {this.state.inputValueYear}
            </span>
          </div>
        </div>
        <div className="card-rewers">
          <div className="cvc">
            <span>{this.state.inputValueCvc}</span>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Card />, document.getElementById("root"));
