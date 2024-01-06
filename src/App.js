import {Component } from 'react'

export default class App extends Component
{
  constructor()
  {
    super()
    this.state = {
      Task : [
        {TaskTitle : 'Javascript Practice', Taskdate : '05/09/2022' , Priority :' High' ,  Status : 'Deactive'},
        {TaskTitle : 'Java program create', Taskdate : '06/09/2022' , Priority :' High' ,  Status : 'Deactive'},  
       {TaskTitle : 'C++', Taskdate : '07/09/2022' , Priority :' High' ,  Status : 'Deactive'},
       ], }


  }
  render(){
  return  < >
    <div className='container' > 
<h1 className='alert alert-danger text-center'> To-Do-List </h1>
<hr/>
<div className="row">
        <div className="col-lg-5 col-md-5">
          <input type="text"  className="form-control" ref={a=>this.taskbox=a} placeholder="Task Title"/>
              </div>
        <div className="col-lg-5 col-md-5">
          <input type="text"   className="form-control"  ref={a=>this.prioritybox=a} placeholder="Choise Priority"/>
        </div>
        <div className="col-lg-2 col-md-2">
          <button className='btn btn-success' onClick="save">Add Task</button>
        </div>
      </div>
  <hr/>
      <div className="row mt-3">
      
   <div><button className='btn btn-success'>Active Task</button></div> &nbsp; &nbsp;
   <div ><button className='btn btn-primary'>Complete Task</button></div> &nbsp; &nbsp;
   <div><button className='btn btn-secondary'>Pendinng  Task</button></div>  &nbsp; &nbsp;
   <b className='alert alert-secondary'>Total Task : {this.state.Task.length}</b>
   <hr/>
  </div>

  <table className="table table-hover">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Task Title</th>
              <th>Task Date</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
        

         {this.state.Task.map((ob,index)=> <tr> 
          <td>{index +1 }</td>
          <td>{ob.TaskTitle }</td>
          <td>{ob.Taskdate }</td>
          <td>{ob.Priority }</td>
          <td>{ob.Priority }</td>

         </tr> )}
          
          </tbody>
      </table>
</div>

 </>
}}
