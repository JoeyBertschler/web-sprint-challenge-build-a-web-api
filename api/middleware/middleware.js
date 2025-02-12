const Project = require("../projects/projects-model");
const Action = require("../actions/actions-model");


// project middleware
const checkProjectId = async (req, res, next) => {
    const id = req.params.id
    const projectId = await Project.get(id)
    if(!projectId){
        res.status(404).json({
            message: "Project not found"
        })
    
    // else if (projectId && {
    //     res.status(400).json({
    //         message: "Project is missing name, description or has both"
    //     })
    // }
    } else {
        req.projectId = projectId
        next()
    }
}

const checkProject =  (req, res, next) => {
    const { name, description } = req.body
    if(!name || !description || !name && !description){
        res.status(400).json({
            message: "name and description fields are required"
        })
    } else {
        next()
    }
}


// PROJECT MIDDLEWARE ENDS HERE

// ACTION MIDDLEWARE STARTS HERE
const checkActionId = async (req, res, next) => {
    const id = req.params.id
    const actionId = await Action.get(id)
    if(!actionId){
        res.status(404).json({
            message: "Action not found"
        })
    } else {
        req.actionId = actionId
        next()
    }
}

const checkAction = (req, res, next) => {
    const { description, notes } = req.body
    if(!description){
        res.status(400).json({
            message: "Missing required description field"
        })
    } else if(!notes){
        res.status(400).json({
            message: "Missing required notes field"
        })
    } else {
        next()
    }
}
// ACTION MIDDLEWARE ENDS HERE

module.exports = {
    checkProjectId,
    checkProject,
    checkActionId,
    checkAction
}
