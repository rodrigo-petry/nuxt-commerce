<template>
  <div class="notification-dropdown has-shadow">
    <b-dropdown 
      aria-role="menu" 
      trap-focus
    >
      <i class="fas fa-bell" slot="trigger" role="button"></i>

      <b-dropdown-item
        aria-role="menu-item"
        :focusable="false"
        custom
        paddingless
      >
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
            <img src="notification.svg" alt="" class="notification-unread">
            <h4 class="notification-title">Notificações</h4>

            <div class="notifications">
              <div class="notification-item">
                <h5 class="notification-item-title">Novo Item Vendido #JAD45</h5>
                <p class="notification-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>

              <div class="notification-item is-read">
                <h5 class="notification-item-title">Novo Item Vendido #JMK5</h5>
                
                <p class="notification-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
            </div>
          </section>
              
          <footer class="modal-card-foot">
            <button class="button is-primary">Marcar como lidas</button>
          </footer>
        </div>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.notification-dropdown {
  .modal-card-body {
    padding: 0;

    .notification-unread {
      width: 15.75px;
      height: 18px;
    }

    .notification-title {
      font-size: 16px;
      color: #444;
      padding: 10px 20px 0 20px;
    }

    .notifications {
      .notification-item {
        border-top: 1px solid #dbdbdb;
        padding: 10px 20px;
        position: relative;

        &.is-read {
          opacity: 0.5;
        }
      }

      .notification-item-title {
        color: #666;
        font-size: 14px;
        margin: 0 0 6px 0;
      }
    }
  }

  .modal-card-foot {
    padding: 8px 20px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .button {
      font-size: 13px;
      width: 150px;
      transition: 300ms linear;

      &:hover {
        background-color: #FFF;
        color: #3b78fa;
        border: 1px solid #3b78fa;
      }
    }
  }
}
</style>