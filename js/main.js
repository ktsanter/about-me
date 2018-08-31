//
//
const app = function () {
	const page = {};
	const settings = {};
	
	//---------------------------------------
	// get things going
	//----------------------------------------
	function init () {
		page.contents = document.getElementById('contents');
		page.notice = document.getElementById('notice');
		page.flipperwrapper = document.getElementById('flipperwrapper');
		
		if (!_initializeSettings()) {
			_setNotice('error in parameters');
		} else {
			_setCourseName();
			if (settings.includeflipper) _addFlipper();
		}
	}
	
	//-------------------------------------------------------------------------------------
	// query params:
	//-------------------------------------------------------------------------------------
	function _initializeSettings() {
		var success = false;
		var params = {};
				
		var urlParams = new URLSearchParams(window.location.search);
		params.coursename = urlParams.has('coursename') ? urlParams.get('coursename') : null;
		params.includeflipper = urlParams.has('flipper');

		if (params.coursename != null) {
			settings.coursename = params.coursename;
			success = true;
		}
		settings.includeflipper = params.includeflipper;
		
		return success;
	}
	
	//--------------------------------------------------------------------------------
	// rendering functions
	//--------------------------------------------------------------------------------
	function _setCourseName() {
	  var sDisplay = settings.coursename.replace(/\"/g, '');
	  sDisplay = sDisplay.replace(/\'/g, '');
		  
	  document.getElementById('courseName').textContent = sDisplay;
	}
		
	function _addFlipper() {
		page.flipperwrapper.innerHTML = 'include flipper';
	}
	
	//---------------------------------------
	// utility functions
	//----------------------------------------
	function _setNotice (label) {
		page.notice.innerHTML = label;

		if (label == '') {
			page.notice.style.display = 'none'; 
			page.notice.style.visibility = 'hidden';
		} else {
			page.notice.style.display = 'block';
			page.notice.style.visibility = 'visible';
		}
	}
	
	return {
		init: init
 	};
}();