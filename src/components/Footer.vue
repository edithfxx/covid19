<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-note">
        統計數據為 {{ dataSnapshot }} 靜態快照，資料來源：衛生福利部疾病管制署
      </div>
      <div class="footer-meta">
        <span class="footer-stack">{{ stack.join(" · ") }}</span>
        <span class="footer-date">{{ releaseDate }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      releaseDate: "2021.12.08",
      dataSnapshot: "2021 年 11–12 月",
      stack: ["Vue 2", "Element UI", "ECharts"],
    };
  },
};
</script>

<style>
.site-footer {
  margin-top: 40px;
  padding: 18px 0;
  border-top: 1px solid #ddd;
  background-color: #f7f8fa;
  color: #909399;
  font-size: 13px;
  line-height: 1.6;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 30px;
  box-sizing: border-box;
}

.footer-meta {
  display: flex;
  align-items: center;
}

.footer-stack {
  color: #b4b8bf;
}

.footer-date {
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid #ddd;
  color: #606266;
}

@media (max-width: 640px) {
  .footer-inner {
    justify-content: center;
    text-align: center;
  }

  .footer-meta {
    margin-top: 8px;
  }
}
</style>
