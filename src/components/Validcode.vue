<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="多行文本" prop="field101">
        <el-input v-model="formData.field101" type="textarea" placeholder="请输入多行文本"
          :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="12">
          <el-row type="flex" justify="start" align="top" :gutter="5">
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="start" align="top">
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="start" align="top">
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="start" align="top">
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="start" align="top">
          </el-row>
        </el-col>
      </el-row>
      <el-form-item label="下拉选择" prop="field110">
        <el-select v-model="formData.field110" placeholder="请选择下拉选择" clearable :style="{width: '100%'}">
          <el-option v-for="(item, index) in field110Options" :key="index" :label="item.label"
            :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-row :gutter="15">
      </el-row>
      <el-row :gutter="15">
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        mobile: '',
        field101: undefined,
        field110: undefined,
      },
      rules: {
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          pattern: /^1(3|4|5|7|8|9)\d{9}$/,
          message: '手机号格式错误',
          trigger: 'blur'
        }],
        field101: [{
          required: true,
          message: '请输入多行文本',
          trigger: 'blur'
        }],
        field110: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }],
      },
      field110Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}

</script>
<style>
</style>
