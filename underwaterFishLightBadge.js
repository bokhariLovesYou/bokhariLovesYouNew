const addStyleString = (str) => {
  const node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

addStyleString('#badge-parent{width:100%;height:100%;max-width:300px;margin-left:auto;margin-right:auto}');
addStyleString('#badge-id{width:100%;height:auto}');

const img = document.createElement("img");
img.setAttribute('id', 'badge-id')
const outerParent = document.getElementById('badge-parent')
img.src = "https://www.underwaterfishlight.com/wp-content/uploads/2017/10/underwaterfishlight-logo.png";
outerParent.appendChild(img);
