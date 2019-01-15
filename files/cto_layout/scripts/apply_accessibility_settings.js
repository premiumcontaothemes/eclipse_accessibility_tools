<script>
/**
 * Apply Accessibility settings on every page
 * Copy this to your <head> or at the end of the <body>
 */
jQuery(document).ready(function() 
{
	// Fontsize
	if( Number( localStorage.getItem('accessibility_fontsize') ) != 0)
	{
		jQuery('html,body').addClass('acc_fontsize_1');
	}	
	// Default fonts active
	if( Number( localStorage.getItem('accessibility_default_fonts') ) > 0)
	{
		jQuery('html,body').addClass('acc_default_fonts');
	}	
	// Black and White active
	if( Number( localStorage.getItem('accessibility_black-white') ) > 0)
	{
		jQuery('html,body').addClass('acc_black-white');
	}	
	// High contrast active
	if( Number( localStorage.getItem('accessibility_contrast') ) > 0)
	{
		jQuery('html,body').addClass('acc_contrast');
	}
	// Boldface active
	if( Number( localStorage.getItem('accessibility_boldface') ) > 0)
	{
		jQuery('html,body').addClass('acc_boldface');
	}
	// Reverse colors active
	if( Number( localStorage.getItem('accessibility_reverse_colors') ) > 0)
	{
		jQuery('html,body').addClass('acc_reverse_colors');
	}	
});
</script>