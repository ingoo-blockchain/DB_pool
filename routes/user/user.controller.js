const db = require('../../db')
const pool = require('../../db_promise').pool

exports.join = (req,res) => {
    res.render('user/join')
}

exports.joinAction = (req,res) => {
    let {userid,userpw,username} = req.body
    let sql = `insert into user(userid,userpw,username) values('${userid}','${userpw}','${username}')`

    db.getConnection( conn => {
        conn.query(sql,(error,result)=>{
            if( error.errno == 1062 ) res.send('아이디가 중복됩니다. <a href="/user/join">회원가입 다시하기</a>')
            else if(error) throw error
            else if(result.affectedRows > 0) {
                res.redirect('/') // 성공            
            }
        })
        conn.release()
    })
}


// async await 
// DB 스키마 
exports.joinAction = async (req,res) => {
    let {userid,userpw,username} = req.body
    // let prepare = [userid,userpw,username]
    console.log(prepare)
    let sql = `insert into user(userid,userpw,username) values(?,?,?)`
    let [result,fields] = await pool.execute(sql,[userid,userpw,username])
    console.log(result,fields)
    // execute는 내부적으로 prepare와 query를 호출한다.
    // dbs.excute(sql,[userid,userpw,username],()=>{

    // })
    // console.log(result)
}