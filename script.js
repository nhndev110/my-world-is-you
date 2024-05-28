class App {
  resolutions = ["240p", "360p", "480p", "720p", "1080p", "4K"];
  imageFileNames = ["240p", "360p", "480p", "720p", "1080p", "crush"];

  handleChange() {
    $("#option").on("change", (ev) => {
      if (ev.target.value === "4K") {
        $("h1.title").text("CÒN ĐÂY LÀ HÌNH ẢNH THẾ GIỚI CỦA TỚ <3");
        $(".earth-img").html(
          `<img class="animate__animated animate__jackInTheBox" id="img" src="img/crush.png" height="300px" />`
        );
        return;
      }

      $("h1.title").text("THẾ GIỚI THEO TỪNG ĐỘ PHÂN GIẢI");
      $(".earth-img").html(
        `<img class="animate__animated animate__rotateIn" id="img" src="img/${ev.target.value}.png" height="300px" />`
      );
    });
  }

  render() {
    const ui = `
      ${this.imageFileNames
        .map((el) => `<img src="img/${el}.png" class="d-none" />`)
        .join("")}
      <h1 class="title">THẾ GIỚI THEO TỪNG ĐỘ PHÂN GIẢI</h1>
      <div class="earth-img" style="300px">
        <img class="animate__animated animate__rotateIn" id="img" src="img/240p.png" height="300px" />
      </div>
      <select class="ui dropdown" id="option">
        ${this.resolutions
          .map((el) => `<option value="${el}">${el}</option>`)
          .join("")}
      </select>
    `;
    $("#root").html(ui);
  }

  init() {
    $(".ui.dropdown").dropdown();
  }

  async start() {
    await this.render();
    this.init();
    this.handleChange();
  }
}

new App().start();
