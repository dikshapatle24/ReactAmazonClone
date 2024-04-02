import React from 'react'

function LeftSideBar() {
  return (
    <div class="leftSidebar" id="leftSidebar">
    <div class="heading">
      <h1>Left Sidebar</h1>
      <i
        onclick="hideSidebar()"
       // style="font-size: 30px"
       style={{ color: 'gray', fontSize: '30px' }}

        class="fa fa-times"
        aria-hidden="true"
      ></i>
    </div>

    <div class="items">
      <h1>Trending</h1>
      <div class="oneItem">
        <p>Best Sellers</p>
        <i
          //style="color: gray; font-size: 14px"
          style={{ color: 'gray', fontSize: '14px' }}

          class="fa fa-chevron-right"
          aria-hidden="true"
        ></i>
      </div>
      <div class="oneItem">
        <p>New Releases</p>
        <i
          //style="color: gray; font-size: 14px"
          style={{ color: 'gray', fontSize: '14px' }}

          class="fa fa-chevron-right"
          aria-hidden="true"
        ></i>
      </div>
      <div class="oneItem">
        <p>Movers & Shakers</p>
        <i
          //style="color: gray; font-size: 14px"
          style={{ color: 'gray', fontSize: '14px' }}

          class="fa fa-chevron-right"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  )
}

export default LeftSideBar