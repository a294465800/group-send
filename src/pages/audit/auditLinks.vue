<style scoped>

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

    <div class="table-list">
      <el-table :data="auditLinks" border stripe style="min-width: 900px;">
        <el-table-column prop="id" label="ID" sortable>
          <template slot-scope="scope">
            <a :href="host + 'baoke_api/' + scope.row.id" target="_blank">{{ host + 'baoke_api/' + scope.row.id }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="times" label="使用次数">
          <template slot-scope="scope">
            {{ scope.row.times }}次s
          </template>
        </el-table-column>
        <el-table-column prop="content" label="内容" show-overflow-tooltip></el-table-column>
        <el-table-column prop="created_time" label="发布时间"></el-table-column>
        <el-table-column prop="updated_time" label="更新时间"></el-table-column>
      </el-table>
    </div>

    <!-- 页码 -->
    <div class="pages">
      <el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page.sync="getData.page_index" :page-size="getData.page_size" layout="total, sizes, prev, pager, next" :total="count">
      </el-pagination>
    </div>
    <!-- /页码 -->

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
      this.$http.getAuditLinks(getData, res => {
        const data = res.data.data;
        this.auditLinks = data.items;
      });
    },

    //数据数量变化
    handleSizeChange(size) {
      this.getData.page_index = 1;
      this.$http.getAuditLinks(getData, res => {
        const data = res.data.data;
        this.auditLinks = data.items;
      });
    }
  }
};
</script>
