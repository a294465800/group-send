<style scoped>

</style>

<template>
  <section class="flex-column loading-wrap flex-center" v-if="loading">
    <i class="el-icon-loading"></i>
  </section>
  <section class="container" v-else>

    <!-- 面包屑导航 -->

    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      <el-breadcrumb-item>链接列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 面包屑导航 -->

    <div class="tale-list">
      <el-table :data="auditList" border stripe style="min-width: 900px;">
        <el-table-column prop="id" label="ID" sortable></el-table-column>
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
      <el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page.sync="getData.currentPage" :page-size="getData.size" layout="total, sizes, prev, pager, next" :total="count">
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

      count: 0,
      getData: {
        size: 20,
        currentPage: 1
      }
    };
  },

  created() {
    this.$http.getAuditLinks(this.getData, res => {
      const data = res.data.data
      this.auditList = data.items
      this.count = data.count
      this.loading = false
    });
  },

  methods: {
    //页码变化
    handleCurrentChange(page) {},

    //数据数量变化
    handleSizeChange(size) {
      this.getData.currentPage = 1;
    }
  }
};
</script>
