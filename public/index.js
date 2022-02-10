const addInputBtn = document.querySelector("#add-input");
const getByIDInput = document.querySelector(".getProductById");
const getAllProductsBtn = document.querySelector("#getAllProducts");
const updateForm = document.querySelector("#update-form");
const inputSelector = document.querySelector("#selector");
const updateSubmit = document.querySelector("#updateSubmit");
const updateId = document.querySelector("#updateId");
const deleteBtn = document.querySelector("#deleteBtn");
const deleteId = document.querySelector("#deleteProductById");

const addInput = () => {
    let inputExists = false;
    const nodes = Object.values(updateForm.children[0].children);
    nodes.forEach((node) => {
        if (
            node.id ===
            `update${inputSelector.value
                .slice(0, 1)
                .toUpperCase()}${inputSelector.value.slice(
                1,
                inputSelector.value.length
            )}`
        ) {
            console.log("el campo ya existe");
            inputExists = true;
        }
    });
    if (!inputExists) {
        const container = document.createElement("div");
        container.style =
            "display: flex;justify-content: center;align-items: center;flex-direction: column;";
        container.id = `update${inputSelector.value
            .slice(0, 1)
            .toUpperCase()}${inputSelector.value.slice(
            1,
            inputSelector.value.length
        )}`;
        const label = document.createElement("label");
        label.htmlFor = `update${inputSelector.value
            .slice(0, 1)
            .toUpperCase()}${inputSelector.value.slice(
            1,
            inputSelector.value.length
        )}`;
        label.textContent = `${inputSelector.value
            .slice(0, 1)
            .toUpperCase()}${inputSelector.value.slice(
            1,
            inputSelector.value.length
        )}`;
        const input = document.createElement("input");

        inputSelector.value !== "price"
            ? (input.type = "text")
            : (input.type = "number");

        input.name = `update${inputSelector.value
            .slice(0, 1)
            .toUpperCase()}${inputSelector.value.slice(
            1,
            inputSelector.value.length
        )}`;
        input.id = `update${inputSelector.value
            .slice(0, 1)
            .toUpperCase()}${inputSelector.value.slice(
            1,
            inputSelector.value.length
        )}`;
        input.style = "margin-bottom: 16px";
        input.classList.add("input-file");

        container.appendChild(label);
        container.appendChild(input);
        updateForm.children[0].appendChild(container);
    }
};

updateSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {};
    console.log();
    let finalUrl;
    if (window.location.href.includes("/?updateId=6")) {
        const url = `${window.location.href}/api/products`.replace(
            `/?updateId=6`,
            ""
        );
        finalUrl = `${url}/${updateId.value}`;
    } else {
        const url = `${window.location.href}api/products`.replace(
            `/?updateId=6`,
            ""
        );
        finalUrl = `${url}/${updateId.value}`;
    }
    console.log(finalUrl);

    xhr.open("PUT", finalUrl);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };
    const propertiesToUpdate = {};
    const nodes = Object.values(updateForm.children[0].children);
    nodes.forEach((node) => {
        node.children[node.children.length - 1].value !== ""
            ? (propertiesToUpdate[
                  node.children[node.children.length - 1].id
              ] = `${node.children[node.children.length - 1].value}`)
            : "";
    });

    const parsedProperties = JSON.stringify(propertiesToUpdate);

    xhr.send(parsedProperties);
});

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {};

    let finalUrl;
    if (window.location.href.includes("/?updateId=6")) {
        const url = `${window.location.href}/api/products`.replace(
            `/?updateId=6`,
            ""
        );
        finalUrl = `${url}/${deleteId.value}`;
    } else {
        const url = `${window.location.href}api/products`.replace(
            `/?updateId=6`,
            ""
        );
        finalUrl = `${url}/${deleteId.value}`;
    }

    console.log(finalUrl);

    xhr.open("DELETE", finalUrl);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    xhr.send();
});

addInputBtn.addEventListener("click", addInput);
