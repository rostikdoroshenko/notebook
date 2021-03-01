const $ = {}

function createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">New Note</span>
                    <span id='modalClose' class="modal-close">X</span>
                </div>
                <div class="modal-body">
                    <input class='input-title' placeholder='Title'/>
                    <textarea class='input-content' placeholder='note...'></textarea>
                    <div class="form">
                        <div class="form-radio-btn">
                            <input id="radio-1" type="radio" name="radio" value="1">
                            <label for="radio-1">High priority</label>
                        </div>
                        <div class="form-radio-btn">
                            <input id="radio-2" type="radio" name="radio" value="2">
                            <label for="radio-2">Middle priority</label>
                        </div>
                        <div class="form-radio-btn">
                            <input id="radio-3" type="radio" name="radio" value="3">
                            <label for="radio-3">Low priority</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button>Save Note</button>
                    <button id='closeBtn'>Close</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal);
    return modal;
}


$.modal = function(options) {
    const $modal = createModal(options);
    const animSpeed = 500;

    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open');
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, animSpeed)
        }
    }
}

const newModal = $.modal()

addBtn.onclick = () => newModal.open();

closeBtn.onclick = () => newModal.close();

modalClose.onclick = () => newModal.close();
