<div
              class="navbar-item d-waloo-drop has-dropdown is-hoverable mr-2"
            >
              <a class="navbar-link waloo-link has-text-weight-semibold">
                Waloo
              </a>

              <div class="waloo-drop navbar-dropdown box">
                <a class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-chalkboard-teacher"></i> </span
                  ><span class="ml-1">How it works ?</span>
                </a>
                <a class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-sign-language"></i> </span
                  ><span class="ml-1">I'm a farmer.</span>
                </a>
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-chart-area"></i> </span
                  ><span class="ml-1">Invest in a farming.</span>
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-address-book"></i> </span
                  ><span class="ml-1">Contact us.</span>
                </a>
              </div>
            </div>
            
            
            <div class="navbar-item fav-fav mr-4">
              <a class="favorite-ico is-flex">
                <span v-if="hasFavorites" class="icon is-block">
                  <i class="fas fa-heart" key="unstared"></i>
                </span>
                <span v-else class="icon is-block">
                  <i class="far fa-heart" key="stared"></i>
                </span>
                <span class="is-block pl-1 has-text-weight-semibold is-size-6">My List</span>
              </a>
            </div>

            <div class="navbar-item has-dropdown shop-d-cart is-hoverable mr-4">
              <a
                class="navbar-link d-waloo-drop-cart-link waloo-link has-text-weight-semibold"
              >
                <span class="icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <span class="tag is-rounded span-number total-shop ml-2">
                  21
                </span>
              </a>

              <div class="waloo-drop d-waloo-drop-cart navbar-dropdown box">
                <a class="navbar-item">
                  <span class="icon"> <i class="fab fa-opencart"></i> </span
                  ><span class="ml-1">My shopping cart</span>
                  <span class="tag is-rounded span-number ml-2">
                    19
                  </span>
                </a>
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-shopping-bag"></i> </span
                  ><span class="ml-1">My orders</span>
                  <span class="tag is-rounded span-number ml-2">
                    2
                  </span>
                </a>
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-history"></i> </span
                  ><span class="ml-1">My shopping history</span>
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-trash"></i> </span
                  ><span class="ml-1">Empty shopping cart</span>
                </a>
              </div>
            </div>
            <div
              class="navbar-item is-hidden d-login-respo has-dropdown is-hoverable mr-6"
            >
              <a class="navbar-link respo-link has-text-weight-semibold">
                <span class="icon pr-2"> <i class="fas fa-user"></i> </span>
                Log in
              </a>

              <div class="respo-waloo-drop waloo-drop navbar-dropdown box">
                <a class="button btn-logg box">
                  Log in
                </a>
                <span
                  class="is-block log-or pb-2 has-text-weight-semibold has-text-centered"
                  >Or</span
                >
                <hr class="div-log navbar-divider" />
                <a class="button btn-reg box mt-3">
                  <span class="icon pr-4">
                    <i class="fas fa-user-plus"></i>
                  </span>
                  Sign up
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-address-book"></i> </span
                  ><span class="ml-1">Contact us.</span>
                </a>
              </div>
            </div>