import taskModels from '../models/task.models.js'


export const getTask = async (req, res)=>{
    const Tasks =await taskModels.find()
    res.send(Tasks);
}

export const saveTask =async (req, res) =>{
    const {task} = req.body
    taskModels.create({task})
    .then((data)=>{
        console.log('Save Successfully!!!')
        res.status(201).send(data)
    })
    .catch((err)=>{
        console.log(err);
        res.send({error:err, msg:'Some Thing Went Wrong !!!'})
    })
}

export const updateTask = async (req, res) =>{
    const {id} = req.params
    const {task} = req.body
    taskModels.findByIdAndUpdate(id, {task})
    .then(()=>{
        res.send('Update Successfully')
    })
    .catch((err)=>{
        console.log(err);
        res.status(201).send({error:err, msg:'Some Thing Went Wrong !!!'})
    })
}

export const deleteTask= async (req, res)=>{
    const {id} = req.params
    taskModels.findByIdAndDelete(id)
    .then(()=>{
        console.log('Delete Successfully')
    })
    .catch((err)=>{
        console.log(err);
        res.status(201).send({error:err, msg:'Some Thing Went Wrong !!!'})
    })
}