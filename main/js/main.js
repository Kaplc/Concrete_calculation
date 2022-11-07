    // 钢筋强度表
    
    var aSteelBar_tb = {
        "HPB300fy": 360,
        "HPB300fy_": 360,
        "HRB335fy": 300,
        "HRB335fy_": 300,

        // HRB400, HRBF400, 
        "HRB400fy": 360,
        "HRB400fy_": 360,
        "HRBF400fy": 360,
        "HRBF400fy_": 360,
        "RRB400fy": 360,
        "RRB400fy_": 360,

        // HRB500, HRBF500
        "HRB500fy": 435,
        "HRB500fy_": 435,
        "HRBF500fy": 435,
        "HRBF500fy_": 435,

    }

    function select_aSteelBar_tb(name){
        // 查询是哪个表并赋值
        if (name == "HRB400"){
            fy = hrb400_tb["fy"]
            fy_ = hrb400_tb["fy_"]
            return {"res_fy": fy, "res_fy_": fy_}
        }else{
            return {"res_fy": 'null', "res_fy_": 'null'}
        }
        // 返回字典
        
    }

    // 混凝土强度表
    var strength_tb = {
        // c15
        "C15fc": 7.2,
        "C15ft": 0.91,
        // c20
        "C20fc": 9.6,
        "C20ft": 1.10,
        // c25
        "C25fc": 11.9,
        "C25ft": 1.27,
        // c30
        "C30fc": 14.3,
        "C30ft": 1.43,
        // c35
        "C35fc": 16.7,
        "C35ft": 1.57,
        // c40
        "C40fc": 19.1,
        "C40ft": 1.71,
        // c45
        "C45fc": 21.2,
        "C45ft": 1.80,
        // c50
        "C50fc": 23.1,
        "C50ft": 1.89,
        // c55
        "C55fc": 25.3,
        "C55ft": 1.96,
        // c60
        "C60fc": 27.5,
        "C60ft": 2.04,
        // c65
        "C65fc": 29.7,
        "C65ft": 2.09,
        // c70
        "C70fc": 31.8,
        "C70ft": 2.14,
        // c75
        "C75fc": 33.8,
        "C75ft": 2.18,
        // c80
        "C80fc": 35.9,
        "C80ft": 2.22,

    }
    

    function select_strength_tb(name){
        
        fy = strength_tb[name + "fc"]
        fy_ = strength_tb[name + "ft"]
        return {"res_fc": fy, "res_ft": fy_}

        
    }

    // vue框架
    var vm = new Vue({
        el: '#app',
        data: {
            strength: 'null',
            aSteelBar: "null",
            fy: 'null',
            fy_: 'null',
            fc: 'null',
            ft: 'null'
        },

        methods: {
            // 查询fc, ft并显示
            show_strength(){
                
                this.fc = select_strength_tb(this.strength)["res_fc"]
                this.ft = select_strength_tb(this.strength)["res_ft"]
                
                
            },
            // 查询fy并显示
            show_aSteelBar(){
                this.fy = select_aSteelBar_tb(this.aSteelBar)["res_fy"]
                this.fy_ = select_aSteelBar_tb(this.aSteelBar)["res_fy_"]
            }
        },
    })
