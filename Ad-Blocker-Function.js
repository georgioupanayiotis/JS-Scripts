<script>
function adBlockFunction()
{
// Google Analytics Tracking 
setTimeout(function() { 
ga('send', 'event', 'Blocker', 'click','Blocker');
},2000);
// Google Analytics End

// Website Users
document.getElementById('contentDivName').innerHTML = 'Please disable your ad blocker for yourwebitename.com';

// Google Blogger Users
document.getElementsByClassName('post-body-n')[0].innerHTML = 'Please disable your ad blocker for yourwebitename.com';
}
</script>
