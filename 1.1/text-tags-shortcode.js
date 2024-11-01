jQuery(document).ready(function($) {

    tinymce.create('tinymce.plugins.tts_span_plugin', {
        init : function(ed, url) {
                // Register command for when button is clicked
                ed.addCommand('tts_span_btn', function() {
                    selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        //If text is selected when button is clicked
                        //Wrap shortcode around it.
                        content =  '[span]'+selected+'[/span]';
                    }else{
                        content =  '[span][/span]';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });

            // Register buttons - trigger above command when clicked
            ed.addButton('tts_span_button', {title : 'Insert span tag', cmd : 'tts_span_btn', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wgARCAAZABwDAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUICQEE/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDAv/aAAwDAQACEAMQAAAA37k5Y4rpUGdV0408O3GnWmE/lrDkwAAD/8QAJxAAAQQBAwMDBQAAAAAAAAAAAgEDBAUGBxESABMhCBAVFBYgIlH/2gAIAQEAAT8A6/q+ybdepDK9Z8T1r0alabO3Nni79gbOR47QUbzz9ipSoYtk7LSonsx2BaKVyF12Dvy3GR+njB9atfLr72u4tzqJnUGIGaRrSDW4HEYi1RQrcotQdXM+OVJcjgBibW01dgNSZ5gIOwM49ZV/o53/AJjO6C0qcIzG2afZwVg5F1Phy4xUsZ76umY3V5l10UBuHFcdES2ATHrH5k+dglLNtYyxLORBadlsdsg7TpAimPFfKbLumy+fano6XHqha6hpoVHXrJekrFr4gMNK886TrznEERORuGbhFtuRGRKqqq/n/8QAHxEBAAEDBAMAAAAAAAAAAAAAAQIAAyEEEBExMEFC/9oACAECAQE/AKMVhy9badJ3kl1SpYm/XqrfBpJ3HMjjgqQRkkXHh//EACARAAEEAgEFAAAAAAAAAAAAAAIAAQMxBBESISIwQmH/2gAIAQMBAT8AXxVSbaPticmtGIjnvG3QVpnymD1UO5I+R34f/9k=' });
        },
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('tts_span_button', tinymce.plugins.tts_span_plugin);

    //Cite
      tinymce.create('tinymce.plugins.tts_cite_plugin', {
        init : function(ed, url) {
                // Register command for when button is clicked
                ed.addCommand('tts_cite_btn', function() {
                    selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        //If text is selected when button is clicked
                        //Wrap shortcode around it.
                        content =  '[cite]'+selected+'[/cite]';
                    }else{
                        content =  '[cite][/cite]';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });

            // Register buttons - trigger above command when clicked
            ed.addButton('tts_cite_button', {title : 'Insert cite tag', cmd : 'tts_cite_btn', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAZABwDAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAYICQQH/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/9oADAMBAAIQAxAAAADflGCRslk6+6HacVWeALKga8mtOrzLQYfXAOHQB//EACoQAAEEAgECBQMFAAAAAAAAAAIBAwQFBgcRCBMACRIUIRAVMSAiMjSB/9oACAEBAAE/APj/ADxn/UfhmqdsYJg9/c+xynZj8yPjcJIb7v3I4kdZMhO4AE236GUUuXSBC/A8r4osir8ngLMrJ0OxiI67H70V4Xm+404TTgeoVVPUDgGBJ+RISReFRU+nnB7QtdaY1psZuT3WDapvNhQ4Gxcjq7eRTO1lYTEgmRdnsEDsKM7NGK25IBxr4IQVwRcLm/2dAyTd/R/i2rNy7bz7WGcX2wayRPs7+eDl6w1UySbYSYosOz40d7lI0szeL9gmMg/5p0obktdRdGnSVi1bmsam1m+eTNbEO23Pb4VArMmZ/p1U64iDJkVHEfuPtwA7DUhzkyHx5TOY5zmXQVg9jm2Wxs5sXwk+wv2ffEttWpIcSE8bs2HDfkGsft8yVjgMj4eFTRz1l44+nCfp/8QAIhEAAgECBQUAAAAAAAAAAAAAAQIDABEEEjFBUSEwkbHB/9oACAECAQE/AKRgzZNxQB0NZG5qIg4yMNpZvO1YuN5Iip5HusRIskzW06ZPtSRBWswsez//xAAkEQABAwIFBQEAAAAAAAAAAAACAQMRACEEEyAxQRQyQnGhwf/aAAgBAwEBPwCyjK0SFlK7wm9DBbUJClqdFejdJvvSI9TemHAHCOmKXGPtMsllzz5flYl5xHFRmw6ITT//2Q==' });
        },
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('tts_cite_button', tinymce.plugins.tts_cite_plugin);

    //Em
      tinymce.create('tinymce.plugins.tts_em_plugin', {
        init : function(ed, url) {
                // Register command for when button is clicked
                ed.addCommand('tts_em_btn', function() {
                    selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        //If text is selected when button is clicked
                        //Wrap shortcode around it.
                        content =  '[em]'+selected+'[/em]';
                    }else{
                        content =  '[em][/em]';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });

            // Register buttons - trigger above command when clicked
            ed.addButton('tts_em_button', {title : 'Insert em tag', cmd : 'tts_em_btn', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAZABwDAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECCAkF/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEEAgP/2gAMAwEAAhADEAAAAO/M5mWC/TDObRkrVk8WztmW59SFAAH/xAAnEAAABgECBAcAAAAAAAAAAAABAgMEBQYHABIICRAjERMUFiAhQf/aAAgBAQABPwDRf3rzzcS3/LOG8Wkq8aM9TYi/xz++RA1l1aUH0UUFQIZzDtVknEm1SdC3UUaJCJjbSn2iCWmPBTbrFijDMT7Vulhx8vxNITqMAfGj2qRdehPSuiOjIRKz145YwyjgTmBN4DcO+fslSOTfTOX3NYrRRnKxhqdg7FWuMUpIB8xrC6LyHpQvtxwZnKnvbwpiqrGN5QlbGA59EAdgffXwD5f/xAAkEQABAgUCBwAAAAAAAAAAAAARAAECAwQSISKhEDAxQVGRwf/aAAgBAgEBPwBgCyZywZeBwgYVMuOZ0D++yInyLsBoz8VDFqpbnxru3B2WOT//xAAiEQAABQMEAwAAAAAAAAAAAAAAAQIRIQMEEhAgMlGRocH/2gAIAQMBAT8AmDDAujDBC2oVMJVDfRUNJWtydPko0N5kX0oucek4+nCSNtG3/wD/2Q==' });
        },
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('tts_em_button', tinymce.plugins.tts_em_plugin);
	
	
	tinymce.create('tinymce.plugins.tts_button_plugin', {
        init : function(ed, url) {
                // Register command for when button is clicked
                ed.addCommand('tts_button_btn', function() {
                    selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        //If text is selected when button is clicked
                        //Wrap shortcode around it.
                        content =  '[button ]'+selected+'[/button ]';
                    }else{
                        content =  '[button ][/button ]';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });

            // Register buttons - trigger above command when clicked
            ed.addButton('tts_button_button', {title : 'Insert em tag', cmd : 'tts_button_btn', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAZABwDAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECCAkF/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEEAgP/2gAMAwEAAhADEAAAAO/M5mWC/TDObRkrVk8WztmW59SFAAH/xAAnEAAABgECBAcAAAAAAAAAAAABAgMEBQYHABIICRAjERMUFiAhQf/aAAgBAQABPwDRf3rzzcS3/LOG8Wkq8aM9TYi/xz++RA1l1aUH0UUFQIZzDtVknEm1SdC3UUaJCJjbSn2iCWmPBTbrFijDMT7Vulhx8vxNITqMAfGj2qRdehPSuiOjIRKz145YwyjgTmBN4DcO+fslSOTfTOX3NYrRRnKxhqdg7FWuMUpIB8xrC6LyHpQvtxwZnKnvbwpiqrGN5QlbGA59EAdgffXwD5f/xAAkEQABAgUCBwAAAAAAAAAAAAARAAECAwQSISKhEDAxQVGRwf/aAAgBAgEBPwBgCyZywZeBwgYVMuOZ0D++yInyLsBoz8VDFqpbnxru3B2WOT//xAAiEQAABQMEAwAAAAAAAAAAAAAAAQIRIQMEEhAgMlGRocH/2gAIAQMBAT8AmDDAujDBC2oVMJVDfRUNJWtydPko0N5kX0oucek4+nCSNtG3/wD/2Q==' });
        },
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('tts_button_button', tinymce.plugins.tts_button_plugin);
	
	
	<img alt="span" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAZABwDAREAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAACAkAAwQFBgf/xAAdAQABBAIDAAAAAAAAAAAAAAABAAIGBwMFBAgJ/9oADAMBAAIQAxAAAABsuIclet8cixclmRu6BOwSfOFzg5FRyjq67uDnordhLqrU87SL50EpOyQK/Ot//8QALxAAAAUCBgADBwUAAAAAAAAAAQIDBAUGBwAICRESExQVIRgxM0JXltMWIjRxgf/aAAgBAQABPwDVVzk1HkVykuK/peOjJWVbz8LGC1ftFnRDoO5Ju1W4poqJnMqCaphJsbbni9etGelHlMQ1L2grtxWLq6UdbepaemVYxu/gDuUPGEMUSvhbLncNtxQMRx1B6iqcgkBI9n9XugrwZjYq3LajrlRC09U8/R0bOyTBkWJeysKU53rchk3R1/hpioRQyIJmD9vIDgYgDjWqzqUBX8NUNhZN5XdKT8BNQcx5/FwjSSTRUbOGskn1kVdo+/YhORtuJvlPirM0tB1o/eVq+qirT3gfXOibmLTn6Ab+SGPGMTMGbAI7zvuBAqJjiJvGcxObFps21n7Z3foGrTylyHx6JuTV1wztQpdkiD0Z5Bwj4Pl5kbh0d/Lt2N2cduBMZXcxkHmwsbC19As5JlFTneCCEiRMjknSuogbkBDnL6mTEQ2MPoONWbLJcmv9QS4UvA2+rmcinhmHQ+j4J05bLcY9sQ3E5CCU2xyiUdhx7GV4fpRcr7Ye/ix7GV4fpRcr7Ye/ixpF0TNW50+qEiJ+Ik4KWamkBXZSLVRs5R5SLkxeSZwAwblEDBvh38Q/+YD3Bj58NP4xP6x//8QAKxEAAQMBBQYHAQAAAAAAAAAAAQACAwQFERIxYQYVISIyQRNCUXGRotGx/9oACAECAQE/AIX46qOmuzvUJL542A8rg76qFomYJh3vuTRwVXb1PR2g1xJxM09R7qLa6ij8HPlxds8V+qp9rKJkTYmk3t0zz11VBVCpgbMzI/q2hsqpmrnyMjJBu/i3JW4QBEVuO0vMw/CsCF0VBHG8cR+lS9SGQU3SqfoX/8QALhEAAQIEBQICCwAAAAAAAAAAAQIDAAQGEQUHEiExCEJi0RATFTJBUVJhgYKS/9oACAEDAQE/AFm0u498UiHdTTLrv02/N4eJaUpC+22r7X4gISoXik8kceqTBPaUlp9U7cbkg7Gx7T8oV001SpDjagnSu3cdrEeCHemiqHS+pQTdzT3Ha36RUdOTmA4i7hM2RrbsDbjcXjIzMSnsIo2XkMRmkodBXcEgHdRMDN2kbbzqP6HnCc3KQ3Kp5Fj4h5xnVjctiVZTs7ILCmllNiODZIEN8egcQ/75j//Z">
	
});