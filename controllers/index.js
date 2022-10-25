let {userData}=require ('./datos')

const getuserdata = (req, res) => {
    const id = req.query.id
    const user = userData.find(user => user.id == id)
    if (user) {
        res.status(200).send({
            status: 200,
            user: {
                fullName: `${user.firstName} ${user.lastName} ${user.maidenName}`,
                email: user.email,
                age: user.age,
                address: user.address,
                jobTitle: user.company.title
            }
        })
    } else {
        res.status(404).send({
            status: 404,
            message: 'User not found'
        })
    }
}

const updateuseradress = (req, res) => {
    const id = req.params.id
    const user = userData.find(user => user.id == id)
    if (user) {
        user.address = req.body
        res.status(200).send({
            status: 200,
            user: user
        })
    } else {
        res.status(404).send({
            status: 404,
            message: "User not found"
        })
    }
}

module.exports = {
    getuserdata,
    updateuseradress
}
