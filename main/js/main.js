    // -------------------数据表-----------------
    // 钢筋强度表
    
    var aSteelBar_tb = {
        // HPB300
        "HPB300fy": 270,
        "HPB300fy_": 270,

        // HRB335
        "HRB335fy": 300,
        "HRB335fy_": 300,

        // HRB400, HRBF400, RRB400
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
    
    // 混凝土保护层最小厚度c表
    var c_tb = {
        // bqk: 构件类型选择板、墙、壳的值
        // lzg: 梁、柱、杆

        // 一级
        "1_bqk": 15,
        "1_lzg": 20,

        // 二a
        "2a_bqk": 20,
        "2a_lzg": 25,

        // 二b
        "2b_bqk": 25,
        "2b_lzg": 35,
        
        // 三a
        "3a_bqk": 30,
        "3a_lzg": 30,
        
        
        "3b_bqk": 40,
        "3b_lzg": 50,
    }
    
    // -------------------查询函数----------------
    // 混凝土查询函数
    function select_strength_tb(name){
        
        fy = strength_tb[name + "fc"]
        fy_ = strength_tb[name + "ft"]
        return {"res_fc": fy, "res_ft": fy_}

        
    }

    // 钢筋强度查询函数
    function select_aSteelBar_tb(name){
        // 查询是哪个表并赋值
       
        fy = aSteelBar_tb[name + "fy"]
        fy_ = aSteelBar_tb[name + "fy_"]

        // 返回字典
        return {"res_fy": fy, "res_fy_": fy_}
        
        
        
    }

    // 查询混凝土保护层最小厚度c
    function select_c_tb(environmental, type){
        // alert(environmental + '_' + type)
        c = c_tb[environmental + '_' + type] 
        // alert(c)
        return c
    }




    // ----------------计算函数---------------

    // 计算as
    function calculation_as(environmental, type){
        c = select_c_tb(environmental, type)

        // 由于as是js的语法关键字混凝土的as改成as_变量名
        as_ = c + 10 + 10 

        return as_
    }

    // 计算h0
    function calculation_h0(h, as_){
        h0 = h - as_
        return h0
    }


    // vue框架
    var vm = new Vue({
        el: '#app',
        data: {
            environmental_class: '',
            component_type: '',
            strength: 'null',
            aSteelBar: "null",
            h: '',
            b: '',
            fy: 'null',
            fy_: 'null',
            fc: 'null',
            ft: 'null',
            as: 'null',
            h0: 'null',
            a1: 'null',
            kexi_b: 'null',

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
            },

            // 显示计算as
            show_as(){
                
                if (!(this.environmental_class == '' || this.component_type == '')){
                    
                    this.as = calculation_as(this.environmental_class, this.component_type)
                    
                }else{
                    this.as = 'null'
                    
                }
                
            },

            // 生成剩余参数
            calculation_parameter(){
                // 生成α1, ξb
                this.a1 = 1.0 
                this.kexi_b = 0.518

                // 显示计算h0
                this.h0 = calculation_h0(this.h, this.as)
            }

        },
    })
