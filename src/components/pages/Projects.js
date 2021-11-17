import React from 'react';

export default function Projects() {
  return (
    <div class="team-grid">
    <div class="container">
        <div class="intro">
            <h2 class="text-center">Meet Our Team</h2>
            <p class="text-center">A Bootstrap 4 example layout with an Meet our team section and team members</p>
        </div>
        <div class="row people d-flex justify-content-center">
            <div class="col-md-4 col-lg-3 item">
                <div class="box" style="background-image:url(https://i.imgur.com/HjKTNkG.jpg)">
                    <div class="cover">
                        <h3 class="name">Tim Cook</h3>
                        <p class="title">Android Developer</p>
                        <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 item">
                <div class="box" style="background-image:url(https://i.imgur.com/WgXRMDs.jpg)">
                    <div class="cover">
                        <h3 class="name">Michael Clarke</h3>
                        <p class="title">Cricker</p>
                        <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 item">
                <div class="box" style="background-image:url(https://i.imgur.com/0Cdlenp.jpg)">
                    <div class="cover">
                        <h3 class="name">Carlos vento</h3>
                        <p class="title">Business Analyst</p>
                        <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
