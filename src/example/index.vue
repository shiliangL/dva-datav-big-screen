<template>
  <div class="example">
    <div class="telecom5g-small-panel">
      <div class="container">
        <div class="container-item">
          <div class="big-screen-panel-title-bar">
            网格信息组件
          </div>
          <datav-grid-information></datav-grid-information>
        </div>
      </div>
    </div>

    <div class="box-wrap">
      <div class="login-content">
        <div class="login-content-form">
        </div>
      </div>
    </div>

    <div class="box-wrap">
      <div class="box">
        <form autocomplete="off">
          <h2>欢迎登录</h2>
          <div class="inputBox">
            <input
              type="text"
              required="required"
            >
            <span>用户名</span>
            <i></i>
          </div>
          <div class="inputBox">
            <input
              type="password"
              required="required"
            >
            <span>密码</span>
            <i></i>
          </div>

          <input
            type="submit"
            value="登录"
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevExample'
}
</script>

<style lang="scss" scoped>
.example {
  width: 100%;
  height: 100vh;
  display: flex;
  color: #fff;
  background: #000;
}

.telecom5g-small-panel {
  overflow: hidden;
  .container {
    height: 100%;
    padding: 20px 16px 0 16px;
  }

  .datav-grid-information {
    .dva-count2-number {
      color: #ffe000;
    }
  }
}

.box-wrap {
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background: #000;
  flex-direction: column;
  justify-content: center;
}

.login-content {
  --radius: 10px;
  width: 380px;
  height: 420px;
  overflow: hidden;
  position: relative;
  border-radius: var(--radius);

  &::after {
    z-index: 1;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;

    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    animation: animate 8s linear infinite;
    animation-delay: -4s; // 动画序列的第 4s 秒位置处立即开始
  }

  &::before {
    z-index: 1;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;

    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    animation: animate 8s linear infinite;
  }

  .login-content-form {
    inset: 1px;
    z-index: 10;
    background: #000;
    position: absolute;
    border-radius: var(--radius);
  }
}

.box {
  width: 380px;
  height: 420px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: #1c1c1c;
  &::after {
    content: "";
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    animation: animate 6s linear infinite;
    animation-delay: -3s;
  }
  &::before {
    content: "";
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    animation: animate 6s linear infinite;
  }
}

form {
  inset: 2px;
  z-index: 2;
  display: flex;
  padding: 50px 40px;
  border-radius: 8px;
  position: absolute;
  background: #28292d;
  flex-direction: column;
}

h2 {
  color: #45f3ff;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1em;
}

.inputBox {
  position: relative;
  width: 300px;
  margin-top: 25px;
}

.inputBox input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.35s;
  z-index: 10;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 10px 0;
  font-size: 1em;
  pointer-events: none;
  color: #8f8f8f;
  letter-spacing: 0.05em;
  transition: 0.35s;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #45f3ff;
  font-size: 0.75em;
  transform: translateX(0px) translateY(-34px);
}

.inputBox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #45f3ff;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.35s;
  pointer-events: none;
  z-index: 9;
}

.inputBox input:valid ~ i,
.inputBox input:focus ~ i {
  height: 44px;
}
input[type="submit"] {
  border: none;
  outline: none;
  width: 100%;
  padding: 11px 25px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 50px;
  background: #45f3ff;
}

input[type="submit"]:active {
  opacity: 0.8;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>
