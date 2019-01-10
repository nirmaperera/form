import React, {Component} from 'react';
import '../styles/App.css';

 
class Form extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
        
        firstN:'',
        lastN:'',
    		defaultF: 'Nirma', 
    		defaultL: ' Perera',
        isEdit: false,
    };
  }
  handleChangeF(event){
    this.setState({firstN: event.target.value});

  }
  handleChangeL(event){
    this.setState({lastN:event.target.value});

  }
  handleEdit(event){
    event.preventDefault();
    this.setState({
       firstN:this.state.defaultF,
       lastN: this.state.defaultL,
       isEdit: true
    })

  }

   handleSave(event){
    event.preventDefault();
    this.setState({
       defaultF: this.state.firstN,
       defaultL: this.state.lastN,
       isEdit: false
    })

  }

  handleCancel(event){
    event.preventDefault();
    this.setState({isEdit:false})
    

  }

	render(){
    if(this.state.isEdit){
      return(
        <form>
           <div>
            <h1> Form </h1>
             <div>
               <label>
                 <input defaultValue={this.state.firstN} onChange={this.handleChangeF.bind(this)} />
              </label>
            </div>

          <div>
            <label>
              <input defaultValue={this.state.lastN} onChange={this.handleChangeL.bind(this)} />
          </label>
         </div>

         <div className="btn">
             <button  onClick={this.handleSave.bind(this)}> Save</button>
             <button  onClick={this.handleCancel.bind(this)}> Cancel</button>
         </div>
        </div>
     </form>
      );
    }
    else{
      return(
         <form>
         <button className="editBtn" onClick={this.handleEdit.bind(this)}> Edit</button>
           <h1> My Form </h1>
           
            <div className="inline">
                 {this.state.defaultF} 
                 {this.state.defaultL} 
            </div>

         </form>
      );
    }
	}
}



export default Form;