//import app from "./server";
/*
const generateAccessToken = (user) => {
    return jwt.si
    gn(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20m'})
}

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    //if (!refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({name: user.name})
        res.json({ accessToken: accessToken })
    })
})

const login = async (req, res) => {
    try {
        const username = req.body.username
        const user;//find user
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("Success");
        } else {
        }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
                //refreshTokens.push(refreshToken)
        res.json({ accessToken: accessToken })

    } catch (e) {
        res.status(500).send();
    }
};

app.delete('/logout', (req, res) => {
   // delete refreshToken
   res.sendStatus(204)
})
*/
