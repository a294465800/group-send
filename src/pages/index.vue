<style scoped>
.el-header {
  background-color: #545c64;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  color: #fff;
  overflow: hidden;
}

.el-dropdown-link {
  color: #ffd04b;
  cursor: pointer;
}

.el-dropdown-link > i {
  margin-right: 20px;
  color: #fff;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #fff;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.nav-bar {
  height: 100%;
  border-right: 0;
}

.el-aside.active {
  overflow: unset;
}

.nav-bar:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.collapse {
  font-size: 24px;
  text-align: right;
  cursor: pointer;
  padding-right: 20px;
}

.collapse i.active {
  transform: rotate(-180deg);
}
</style>

<template>
  <el-container>
    <!-- 顶部 -->
    <el-header>
      <div class="header-logo">后台管理</div>
      <div class="header-user">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i>欢迎</i>{{admin}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <!-- /顶部 -->
    <el-container>

      <!-- 左侧导航 -->
      <el-aside width="auto" :class="{'active': isCollapse}">
        <el-menu :default-active="activeNav" class="nav-bar" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" router>
          <div class="collapse" @click="collapseNav">
            <i :class="{'active': isCollapse}" class="el-icon-caret-left"></i>
          </div>
          <el-submenu index="/commodity">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>内容管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/audit/list">内容列表</el-menu-item>
              <el-menu-item index="/audit/links">链接列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 左侧导航 -->

      <!-- 内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- /内容 -->
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //导航展开控制
      isCollapse: false,

      activeNav: "/",
      admin: "管理员",
      type: sessionStorage.type || ""
    };
  },

  created() {
    this.activeNav = this.$route.path;
    this.admin = sessionStorage.username;
  },
  methods: {
    //退出登录
    logout() {
      this.$http.logout(res => {
        sessionStorage.username = "";
        this.$router.push("/login");
      });
    },

    //控制展开
    collapseNav() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>


