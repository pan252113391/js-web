<template>
  <div class="login_wrapper">
    <div class="switch_wrpper">
      <el-row>
        <template v-for="(item,index) in title">
          <el-col :span="12" :key="item.id">
            <div
              :class="{active:indexItem == index}"
              class="title"
              @click="changeBg(index)"
            >{{item.name}}</div>
          </el-col>
        </template>
      </el-row>
    </div>

    <!-- form表单 -->

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      size="mini"
      label-position="left"
    >
      <el-form-item prop="email" class="form_item">
        <label slot="label" class="email_label">邮箱:</label>
        <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <label slot="label" class="email_label">密码:</label>
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="enterPass" v-if="indexItem == 1">
        <label slot="label" class="email_label">确认密码:</label>
        <el-input type="password" v-model="ruleForm.enterPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="18">
          <el-form-item prop="code">
            <label slot="label" class="email_label">验证码:</label>
            <el-input type="text" v-model="ruleForm.code" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button
            class="regist_button"
            type="success"
            size="mini"
            :plain="true"
            @click="getSms"
          >获取验证码</el-button>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{titleName}}</el-button>
        <el-button @click="resetForm('ruleForm')">清空</el-button>
      </el-form-item>
    </el-form>

    <div style="padding-top:100px">测试验证码组件使用</div>
    <el-button size="mini">
      <valid-code ></valid-code>
    </el-button>




    
  </div>
</template>

<script>
// @ is an alias to /src
import {
  getSmsCodeApi,
  getRegisterCodeApi,
  getRegisterApi,
} from "../api/login";
import validCode from "../components/Validcode";

import { regEmail } from "../utils/reg";
export default {
  name: "login",
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!regEmail(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.pass !== "") {
          this.$refs.ruleForm.validateField("enterPass", err => {
            if (!err) {
              console.log("成功");
            } else {
              console.log("失败");
            }
          });
        }
        callback();
      }
    };
    var validateEnterPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "ssss@qq.com",
        pass: "pan123",
        enterPass: "",
        code: ""
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        enterPass: [{ validator: validateEnterPass, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      },
      resCode: "",
      title: [
        { name: "登录", type: "login" },
        { name: "注册", type: "register" }
      ],
      indexItem: 0,
      validCode: "",


    };
  },
  components: {
    validCode: validCode
  },
  methods: {
    // 确定提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.indexItem !== 0) {
            // 注册
            let req = {
              username: this.ruleForm.email,
              password: this.ruleForm.enterPass,
              code: this.ruleForm.code
            };
            getRegisterApi(req)
              .then(res => {
                console.log(res);
              })
              .catch(err => {});
          } else {
            // 登录
            let req = {
              username: this.ruleForm.email,
              password: this.ruleForm.pass,
              code: this.ruleForm.code
            };
            this.$store.dispatch('login/LOGIN',req).then(res=>{
        
                this.$router.push('/home');
  
                this.$message.success(res.data.message);
            }).catch(err=>{
              console.log(err);
                this.$message.error('登录失败');
            });


 
        
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 清空input
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //获取注册/登录验证码
    getSms() {
      if (this.indexItem == 0) {
        console.log("0");
        let req = {
          username: this.ruleForm.email,
          module: "login"
        };
        // 获取登录验证码
        getSmsCodeApi(req)
          .then(res => {
            this.resCode = res.data.message;
            let arr = this.resCode.split("：");
            this.ruleForm.code = arr[1];
            this.$message.success('获取验证码成功')

          })
          .catch(err => {
            this.$message.error(err.data.message)
          });
      } else {
        // 获取注册验证码
        let req = {
          username: this.ruleForm.email,
          module: "register"
        };
        getRegisterCodeApi(req)
          .then(res => {
            this.resCode = res.data.message;
            let arr = this.resCode.split("：");
            this.ruleForm.code = arr[1];
            this.$message.success('获取验证码成功')
          })
          .catch(err => {
            this.$message.error('获取验证码失败')

          });
      }
    },

    changeBg(index) {
      this.indexItem = index;
      this.$refs.ruleForm.resetFields();
    }
  },
  computed: {
    titleName() {
      return this.indexItem == 0 ? "登录" : "注册";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login_wrapper {
  width: 400px;
  margin: 200px auto;
  .active {
    background-color: rgba($color: #000000, $alpha: 0.5);
    color: #fff;
  }
}
</style>
