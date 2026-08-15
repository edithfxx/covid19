<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">疫苗簡介</el-menu-item>
      <el-menu-item index="2">統計資料</el-menu-item>
      <el-menu-item index="3">Q&A</el-menu-item>
      <el-menu-item index="4">預約平台</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
    };
  },
  mounted() {
    this.setActiveIndex();
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case "1":
          this.$router.push("/");
          break;
        case "2":
          this.$router.push("/Statistics");
          break;
        case "3":
          this.$router.push("/QA");
          break;
        case "4":
          window.open(
            "https://www.cdc.gov.tw/Category/MPage/Ys9aAwmyw4FsvUEqSntiYg"
          );
          break;
      }
    },
    setActiveIndex() {
      const path = this.$route.path;
      console.log(path);
      if (path.indexOf("Appointment") > -1) {
        this.activeIndex = "4";
      } else if (path.indexOf("QA") > -1) {
        this.activeIndex = "3";
      } else if (path.indexOf("Statistics") > -1) {
        this.activeIndex = "2";
      } else {
        this.activeIndex = "1";
      }
    },
  },
};
</script>