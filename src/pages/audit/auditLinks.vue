<style scoped>
.operation {
  text-align: left;
  height: 45px;
}
</style>

<template>
  <section class="flex-column loading-wrap flex-center" v-if="loading">
    <i class="el-icon-loading"></i>
  </section>
  <section class="container flex-column" v-else>

    <!-- 面包屑导航 -->

    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      <el-breadcrumb-item>链接列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 面包屑导航 -->

    <div class="operation">
      <el-button type="primary" @click="addLink">新增</el-button>
    </div>

    <div class="table-list">
      <el-table :data="auditLinks" border stripe style="min-width: 900px;">
        <el-table-column prop="id" label="ID" sortable>
          <template slot-scope="scope">
            <a :href="host + 'baoke_api/' + scope.row.id" target="_blank">{{ host + 'baoke_api/' + scope.row.id }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="times" label="使用次数">
          <template slot-scope="scope">
            {{ scope.row.times }}次
          </template>
        </el-table-column>
        <el-table-column prop="content" label="内容" show-overflow-tooltip></el-table-column>
        <el-table-column prop="created_time" label="发布时间"></el-table-column>
        <el-table-column prop="updated_time" label="更新时间"></el-table-column>
        <el-table-column label="操作" width="130">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.$index, scope.row)" type="primary" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 页码 -->
    <div class="pages">
      <el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page.sync="getData.page_index" :page-size="getData.page_size" layout="total, sizes, prev, pager, next" :total="count">
      </el-pagination>
    </div>
    <!-- /页码 -->

    <!-- 新增 -->
    <el-dialog title="新增链接" :visible.sync="AddDialog" width="30%" center>
      <el-form label-position="right" label-width="80px" :model="addForm">
        <el-form-item label="链接内容">
          <el-input v-model="addForm.content" type="textarea" autosize placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="使用次数">
          <el-input v-model.number="addForm.times" placeholder="请输入次数">
            <template slot="append">次</template>
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="AddDialogHandleCancel">取 消</el-button>
        <el-button type="primary" @click="AddDialogHandleConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- /新增 -->

    <!-- 修改 -->
    <el-dialog title="修改链接" :visible.sync="EditDialog" width="30%" center @close="EditDialogHandleCancel">
      <el-form label-position="right" label-width="80px" :model="addForm">
        <el-form-item label="链接内容">
          <el-input v-model="addForm.content" type="textarea" autosize placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="使用次数">
          <el-input v-model.number="addForm.times" placeholder="请输入次数">
            <template slot="append">次</template>
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="EditDialogHandleCancel">取 消</el-button>
        <el-button type="primary" @click="EditDialogHandleConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- /修改 -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      host: this.$http.host,

      count: 0,
      getData: {
        page_size: 20,
        page_index: 1
      },

      addForm: {
        content: "",
        times: ""
      },
      AddDialog: false,

      EditDialog: false,
      currentRow: {
        row: {},
        index: ""
      }
    };
  },

  created() {
    this.$http.getAuditLinks(this.getData, res => {
      const data = res.data.data;
      this.auditLinks = data.items;
      this.count = data.count;
      this.loading = false;
    });
  },

  methods: {
    //页码变化
    handleCurrentChange(page) {
      this.getData.page_index = page;
      this.$http.getAuditLinks(this.getData, res => {
        const data = res.data.data;
        this.auditLinks = data.items;
      });
    },

    //数据数量变化
    handleSizeChange(size) {
      this.getData.page_size = size;
      this.getData.page_index = 1;
      this.$http.getAuditLinks(this.getData, res => {
        const data = res.data.data;
        this.auditLinks = data.items;
      });
    },

    //新增按钮
    addLink() {
      this.AddDialog = true;
    },

    //新增取消
    AddDialogHandleCancel() {
      this.AddDialog = false;
    },

    //新增确定
    AddDialogHandleConfirm() {
      this.$http.postAuditLink(this.addForm, res => {
        this.$http.getAuditLinks(this.getData, res => {
          const data = res.data.data;
          this.auditLinks = data.items;
          this.count = data.count;
          this.AddDialog = false;
          this.$message({
            type: "success",
            message: "新增成功"
          });
        });
      });
    },

    //修改按钮
    handleEdit(index, row) {
      this.addForm.content = row.content;
      this.addForm.times = row.times;
      this.currentRow.row = row;
      this.currentRow.index = index;
      this.EditDialog = true;
    },

    //修改取消
    EditDialogHandleCancel() {
      this.addForm.content = "";
      this.addForm.times = "";
      this.EditDialog = false;
    },

    //修改确定
    EditDialogHandleConfirm() {
      const putForm = this.addForm;
      this.$http.putAuditLink(this.currentRow.row.id, putForm, res => {
        this.auditLinks[this.currentRow.index].content = putForm.content;
        this.auditLinks[this.currentRow.index].times = putForm.times;
        this.addForm.content = "";
        this.addForm.times = "";
        this.EditDialog = false;
        this.$message({
          type: "success",
          message: "修改成功"
        });
      });
    }
  }
};
</script>
