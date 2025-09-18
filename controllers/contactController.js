//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req,res)=>{
    res.status(200).json({
        message: "Getting all contacts"
    });
};

const createContact = (req,res)=>{
    res.status(200).json({
        message: "Create contacts"
    })
}

const updateContact = (req,res)=>{
    res.status(200).json({
        message: `Update contacts for ${req.params.id}`
    })
}

const deleteContact = (req,res) =>{
    res.status(200).json({
        message: `Delete contacts for ${req.params.id}`
    })
}

const getContact = (req,res)=>{
    res.status(200).json({
        message: `Get contact for ${req.params.id}`
    })
}

module.exports ={getContact, createContact, updateContact, deleteContact, getContacts}