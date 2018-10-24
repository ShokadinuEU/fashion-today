import React from 'react'
import './support.scss'

function Support() {
  return (
    <div className="main-support">
      <div className="form-wrapper">
        <h2>Contact Customer Service </h2>
        <div className="form-issue">
          <form id="submit-ticket" className="submit-form">
            <p>Simply complete the form and click 'send' to submit an enquiry:</p>
            <div>
              <div>
                <label>Full Name * </label><br />
                <input type="text"/>
              </div>
              <div>
                <label>Email * </label><br />
                <input type="text"/>
                <p>Please ensure that your email address is correct so that we can respond to your enquiry.</p>
              </div>
              <div>
                <label>Contact Preferences *</label><br />
                <select name="contact-preference">
                <option value="">Contact Preferences</option>
                <option value="1">I prefer to be contacted by phone</option>
                <option value="2">If you need to, you may contact me by phone</option>
                <option value="3">I don’t want to be contacted by phone</option>
                </select>
              </div>
              <div>
                <label>Location(Shipping Address) *</label><br />
                <select name="Location(Shipping Address)">
                <option value="">Location(Shipping Address)</option>
                <option value="1">UK</option>
                <option value="2">Europe</option>
                <option value="3">US</option>
                <option value="3">Aus</option>
                <option value="3">Asia</option>
                </select>
              </div>
              <div>
                <label>Query Type(select) *</label><br />
                <select name="Query Type(select)">
                <option value="">Query Type(select)</option>
                <option value="1">How to Shop</option>
                <option value="2">Technical Difficulties</option>
                <option value="3">Product Information</option>
                <option value="3">My Order</option>
                <option value="3">Returns</option>
                </select>
              </div>
              <div>
                <label>Subject * </label><br />
                <input type="text"/>
              </div>
              <div>
                <label>Messaje * </label><br />
                <textarea name="" id="" cols="40" rows="4"></textarea>
              </div>
              <div> 
                <label for="Attachment">Upload File (Optional) (RECOMMENDED)</label> 
                <input data-val="true" data-val-accept="Invalid File Type" data-val-accept-exts="jpg,jpeg,gif,png,tif,tiff,txt,doc,docx,pdf" data-val-filesize="You have exceeded the maximum file size 4 Mb" data-val-filesize-maxsize="4194304" id="Attachment" name="Attachment" placeholder="Name" tabindex="1" value="" type="file" />
              </div>
              <div>
                <br/>
                <button id="btnSendContactUs">Send</button> 
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Support

