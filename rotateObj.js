var context = document.getElementById('pageCanvas').getContext('2d');
            var angle = 0;
            function convertToRadians(degree) {
                return degree*(Math.PI/180);
            }
            
            function incrementAngle() {
                angle++;
                if(angle > 360) {
                    angle = 0;
                }
            }
            
            function drawRandomlyColoredRectangle() {  
                // clear the drawing surface
                context.clearRect(0,0,1280,720);
                // you can also stroke a rect, the operations need to happen in order 
                incrementAngle();
                context.save();                
                context.lineWidth = 10;  
                context.translate(200,200);
                context.rotate(convertToRadians(angle));
                // set the fill style
                context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
                context.fillRect(-25,-25,50,50);
                context.strokeRect(-25,-25,50,50);                
                context.restore();
            }
            
            // Ideally use getAnimationFrame but for simplicity:
            setInterval(drawRandomlyColoredRectangle, 20);
