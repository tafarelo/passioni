import React from 'react';

function Home() {
  return (
    <div>
    <div className="preloader">
		<div className="preloader_image pulse"></div>
	</div>

	<div className="modal" tabIndex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<div className="widget widget_search">
			<form method="get" className="searchform search-form" action="/">
				<div className="form-group">
					<input type="text" name="search" className="form-control" placeholder="Search keyword" id="modal-search-input" />
				</div>
				<button type="submit" className=""></button>
			</form>
		</div>
	</div>

	<div className="modal fade" tabIndex="-1" role="dialog" id="messages_modal">
		<div className="fw-messages-wrap ls p-normal">

		</div>
	</div>
	<div id="canvas">
		<div id="box_wrapper">

			<div className="header_absolute">
				<header className="page_header page_header_side vertical_menu_header ds bottom_mask_add">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 my-0 mx-0 d-flex justify-content-between align-items-center">
								<a href="./" className="logo">
									<img src={require("../../assets/images/logo.png")} alt="img" />
								</a>
								<span className="header-phone">
									<span>call us now</span>
									<span className="phone"><span className="color-main pr-2">800</span> 123 4567</span>
									<span>24/7 free</span>
								</span>
								<span className="header-soc">
									<a href="#">
										<i className="fa fa-sign-in" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-user-o" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i className="fa fa-calendar" aria-hidden="true"></i>
									</a>
									<span className="toggle_menu toggle_menu_side header-slide toggle_menu_special"><span></span></span>
								</span>
							</div>
						</div>
					</div>
					<div className="side_header_inner ds">
						<div className="scrollbar-macosx">
							<div className="header-side-menu text-left">
								<div className="container-fluid c-gutter-0">
									<div className="row">
										<div className="col-12 ">
											<div className="menu-part menu-side-click">
												<nav className="mainmenu_side_wrapper">
													<ul className="nav menu-click">

														<li className="active">
															<a href="index.html">Home</a>
															<ul>
																<li>
																	<a href="index.html">MultiPage</a>
																</li>
																<li>
																	<a href="index_static.html">Static Intro</a>
																</li>
																<li>
																	<a href="index_singlepage.html">Single Page</a>
																</li>
																<li>
																	<a href="index-alt.html">Single Page Alternative</a>
																</li>
															</ul>
														</li>

														<li>
															<a href="blog-right.html">Blog</a>
															<ul>

																<li>
																	<a href="blog-right.html">Right Sidebar</a>
																</li>
																<li>
																	<a href="blog-left.html">Left Sidebar</a>
																</li>
																<li>
																	<a href="blog-full.html">No Sidebar</a>
																</li>
																<li>
																	<a href="blog-grid.html">Blog Grid</a>
																</li>

																<li>
																	<a href="blog-single-right.html">Post</a>
																	<ul>
																		<li>
																			<a href="blog-single-right.html">Right Sidebar</a>
																		</li>
																		<li>
																			<a href="blog-single-left.html">Left Sidebar</a>
																		</li>
																		<li>
																			<a href="blog-single-full.html">No Sidebar</a>
																		</li>
																	</ul>
																</li>

																<li>
																	<a href="blog-single-video-right.html">Video Post</a>
																	<ul>
																		<li>
																			<a href="blog-single-video-right.html">Right Sidebar</a>
																		</li>
																		<li>
																			<a href="blog-single-video-left.html">Left Sidebar</a>
																		</li>
																		<li>
																			<a href="blog-single-video-full.html">No Sidebar</a>
																		</li>
																	</ul>
																</li>

															</ul>
														</li>

														<li>
															<a href="#">Features</a>
															<div className="mega-menu">
																<ul className="mega-menu-row">
																	<li className="mega-menu-col">
																		<a href="#">Headers</a>
																		<ul>
																			<li>
																				<a href="header1.html">Header Type 1</a>
																			</li>
																			<li>
																				<a href="header2.html">Header Type 2</a>
																			</li>
																			<li>
																				<a href="header3.html">Header Type 3</a>
																			</li>
																			<li>
																				<a href="header4.html">Header Type 4</a>
																			</li>
																			<li>
																				<a href="header5.html">Header Type 5</a>
																			</li>
																			<li>
																				<a href="header6.html">Header Type 6</a>
																			</li>
																		</ul>
																	</li>
																	<li className="mega-menu-col">
																		<a href="#">Side Menus</a>
																		<ul>
																			<li>
																				<a href="header-side.html">Push Left</a>
																			</li>
																			<li>
																				<a href="header-side-right.html">Push Right</a>
																			</li>
																			<li>
																				<a href="header-side-slide.html">Slide Left</a>
																			</li>
																			<li>
																				<a href="header-side-slide-right.html">Slide Right</a>
																			</li>
																			<li>
																				<a href="header-side-sticked.html">Sticked Left</a>
																			</li>
																			<li>
																				<a href="header-side-sticked-right.html">Sticked Right</a>
																			</li>
																		</ul>
																	</li>
																	<li className="mega-menu-col">
																		<a href="title1.html">Title Sections</a>
																		<ul>
																			<li>
																				<a href="title1.html">Title section 1</a>
																			</li>
																			<li>
																				<a href="title2.html">Title section 2</a>
																			</li>
																			<li>
																				<a href="title3.html">Title section 3</a>
																			</li>
																			<li>
																				<a href="title4.html">Title section 4</a>
																			</li>
																			<li>
																				<a href="title5.html">Title section 5</a>
																			</li>
																			<li>
																				<a href="title6.html">Title section 6</a>
																			</li>
																		</ul>
																	</li>
																	<li className="mega-menu-col">
																		<a href="footer1.html#footer">Footers</a>
																		<ul>
																			<li>
																				<a href="footer1.html#footer">Footer Type 1</a>
																			</li>
																			<li>
																				<a href="footer2.html#footer">Footer Type 2</a>
																			</li>
																			<li>
																				<a href="footer3.html#footer">Footer Type 3</a>
																			</li>
																			<li>
																				<a href="footer4.html#footer">Footer Type 4</a>
																			</li>
																			<li>
																				<a href="footer5.html#footer">Footer Type 5</a>
																			</li>
																			<li>
																				<a href="footer6.html#footer">Footer Type 6</a>
																			</li>
																		</ul>
																	</li>
																	<li className="mega-menu-col">
																		<a href="copyright1.html#copyright">Copyright</a>

																		<ul>
																			<li>
																				<a href="copyright1.html#copyright">Copyright 1</a>
																			</li>
																			<li>
																				<a href="copyright2.html#copyright">Copyright 2</a>
																			</li>
																			<li>
																				<a href="copyright3.html#copyright">Copyright 3</a>
																			</li>
																			<li>
																				<a href="copyright4.html#copyright">Copyright 4</a>
																			</li>
																			<li>
																				<a href="copyright5.html#copyright">Copyright 5</a>
																			</li>
																			<li>
																				<a href="copyright6.html#copyright">Copyright 6</a>
																			</li>
																		</ul>
																	</li>

																</ul>
															</div>
														</li>


														<li>
															<a href="about.html">Pages</a>
															<ul>


																<li>
																	<a href="about.html">About</a>
																</li>

																<li>
																	<a href="services.html">Our Services</a>
																	<ul>
																		<li>
																			<a href="services.html">Services 1</a>
																		</li>
																		<li>
																			<a href="services2.html">Services 2</a>
																		</li>
																		<li>
																			<a href="service-single.html">Single Service</a>
																		</li>
																	</ul>
																</li>

																<li>
																	<a href="gallery-excerpt.html">Gallery</a>
																	<ul>
																		<li>
																			<a href="gallery-excerpt-2-cols.html">2 columns</a>
																		</li>
																		<li>
																			<a href="gallery-excerpt.html">3 column</a>
																		</li>
																		<li>
																			<a href="gallery-excerpt-4-cols.html">4 columns</a>
																		</li>
																	</ul>
																</li>

																<li>
																	<a href="gallery-tiled.html">Tiled Gallery</a>
																</li>

																<li>
																	<a href="gallery-single.html">Gallery Item</a>
																</li>

																<li>
																	<a href="photo_session.html">Photo session</a>
																</li>


																<li>
																	<a href="casting.html">Casting</a>
																</li>


																<li>
																	<a href="shop-right.html">Shop</a>
																	<ul>
																		<li>
																			<a href="shop-account-dashboard.html">Account</a>
																			<ul>

																				<li>
																					<a href="shop-account-details.html">Account details</a>
																				</li>
																				<li>
																					<a href="shop-account-addresses.html">Addresses</a>
																				</li>
																				<li>
																					<a href="shop-account-address-edit.html">Edit Address</a>
																				</li>
																				<li>
																					<a href="shop-account-orders.html">Orders</a>
																				</li>
																				<li>
																					<a href="shop-account-order-single.html">Single Order</a>
																				</li>
																				<li>
																					<a href="shop-account-downloads.html">Downloads</a>
																				</li>
																				<li>
																					<a href="shop-account-password-reset.html">Password Reset</a>
																				</li>
																				<li>
																					<a href="shop-account-login.html">Login/Logout</a>
																				</li>

																			</ul>
																		</li>
																		<li>
																			<a href="shop-right.html">Right Sidebar</a>
																		</li>
																		<li>
																			<a href="shop-left.html">Left Sidebar</a>
																		</li>
																		<li>
																			<a href="shop-product-right.html">Product Right Sidebar</a>
																		</li>
																		<li>
																			<a href="shop-product-left.html">Product Left Sidebar</a>
																		</li>
																		<li>
																			<a href="shop-cart.html">Cart</a>
																		</li>
																		<li>
																			<a href="shop-checkout.html">Checkout</a>
																		</li>
																		<li>
																			<a href="shop-order-received.html">Order Received</a>
																		</li>

																	</ul>
																</li>

																<li>
																	<a href="shortcodes_iconbox.html">Shortcodes</a>
																	<ul>
																		<li>
																			<a href="shortcodes_typography.html">Typography</a>
																		</li>
																		<li>
																			<a href="shortcodes_buttons.html">Buttons</a>
																		</li>
																		<li>
																			<a href="shortcodes_pricing.html">Pricing</a>
																		</li>
																		<li>
																			<a href="shortcodes_iconbox.html">Icon Boxes</a>
																		</li>
																		<li>
																			<a href="shortcodes_progress.html">Progress</a>
																		</li>
																		<li>
																			<a href="shortcodes_tabs.html">Tabs &amp; Collapse</a>
																		</li>
																		<li>
																			<a href="shortcodes_bootstrap.html">Bootstrap Elements</a>
																		</li>
																		<li>
																			<a href="shortcodes_animation.html">Animation</a>
																		</li>
																		<li>
																			<a href="shortcodes_icons.html">Template Icons</a>
																		</li>
																		<li>
																			<a href="shortcodes_socialicons.html">Social Icons</a>
																		</li>
																	</ul>
																</li>

																<li>
																	<a href="shortcodes_widgets_default.html">Widgets</a>
																	<ul>
																		<li>
																			<a href="shortcodes_widgets_default.html">Default Widgets</a>
																		</li>
																		<li>
																			<a href="shortcodes_widgets_shop.html">Shop Widgets</a>
																		</li>
																		<li>
																			<a href="shortcodes_widgets_custom.html">Custom Widgets</a>
																		</li>
																	</ul>

																</li>


																<li>
																	<a href="events-left.html">Events</a>
																	<ul>
																		<li>
																			<a href="events-left.html">Left Sidebar</a>
																		</li>
																		<li>
																			<a href="events-right.html">Right Sidebar</a>
																		</li>
																		<li>
																			<a href="events-full.html">Full Width</a>
																		</li>
																		<li>
																			<a href="event-single-left.html">Single Event</a>
																			<ul>
																				<li>
																					<a href="event-single-left.html">Left Sidebar</a>
																				</li>
																				<li>
																					<a href="event-single-right.html">Right Sidebar</a>
																				</li>
																				<li>
																					<a href="event-single-full.html">Full Width</a>
																				</li>
																			</ul>
																		</li>
																	</ul>
																</li>

																<li>
																	<a href="team.html">Team</a>
																	<ul>
																		<li>
																			<a href="team.html">Team List</a>
																		</li>
																		<li>
																			<a href="team-single.html">Team Member</a>
																		</li>
																	</ul>
																</li>


																<li>
																	<a href="comingsoon.html">Comingsoon</a>
																</li>

																<li>
																	<a href="faq.html">FAQ</a>
																	<ul>
																		<li>
																			<a href="faq.html">FAQ</a>
																		</li>
																		<li>
																			<a href="faq2.html">FAQ 2</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<a href="404.html">404</a>
																</li>

															</ul>
														</li>

														<li>
															<a href="models-image.html">Models</a>
															<ul>
																<li>
																	<a href="models-image.html">Image Only</a>
																	<ul>
																		<li>
																			<a href="models-image-2-cols.html">2 columns</a>
																		</li>
																		<li>
																			<a href="models-image.html">3 columns</a>
																		</li>
																		<li>
																			<a href="models-image-4-cols.html">4 columns</a>
																		</li>

																	</ul>
																</li>

																<li>
																	<a href="models-title.html">Image With Title</a>
																	<ul>
																		<li>
																			<a href="models-title-2-cols.html">2 columns</a>
																		</li>
																		<li>
																			<a href="models-title.html">3 column</a>
																		</li>
																		<li>
																			<a href="models-title-4-cols.html">4 columns</a>
																		</li>
																	</ul>
																</li>

																<li>
																	<a href="personal-modal-page.html">Personal model page</a>
																</li>
															</ul>
														</li>

														<li>
															<a href="contact.html">Contact</a>
															<ul>
																<li>
																	<a href="contact.html">Contact 1</a>
																</li>
																<li>
																	<a href="contact2.html">Contact 2</a>
																</li>
																<li>
																	<a href="contact3.html">Contact 3</a>
																</li>
																<li>
																	<a href="contact4.html">Contact 4</a>
																</li>
															</ul>
														</li>
													</ul>
												</nav>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="bottom_part">
							<span className="phone"><span className="color-main pr-1">800</span> 123 4567</span>
							<span className="header-soc mt-0">
								<a href="#">
									<i className="fa fa-sign-in" aria-hidden="true"></i>
								</a>
								<a href="#">
									<i className="fa fa-user-o" aria-hidden="true"></i>
								</a>
								<a href="#">
									<i className="fa fa-calendar" aria-hidden="true"></i>
								</a>
							</span>
						</div>
					</div>
				</header>
				<section className="page_slider video-bg cover-image ds text-center bottom_mask_subtract">
					<img src={require("../../assets/images/home_1.jpg")} className="" alt="img" />
					<div className="flex-bg ds z-6 s-overlay">
						<video loop muted id="myVideo">
							<source src="#" data-src={require("../../assets/images/Comercial_Stock_Models_2018.mp4")} data-time="26" type="video/mp4" />
						</video>
					</div>
					<div className="soc-buttons">
						<span>follow:</span>
						<span><a href="#" className="fa fa-facebook"></a></span>
						<span><a href="#" className="fa fa-twitter"></a></span>
						<span><a href="#" className="fa fa-google-plus"></a></span>
						<span><a href="#" className="fa fa-youtube-play"></a></span>
						<span><a href="#" className="fa fa-instagram"></a></span>
					</div>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div className="intro_layers_wrapper">
									<div className="intro_layers">
										<div className="intro_layer" data-animation="fadeInRight">
											<div className="d-inline-block">
												<h2 className="text-uppercase intro_featured_word">
													topmodels
												</h2>
											</div>
										</div>
										<div className="intro_layer mt-30" data-animation="fadeInUp">
											<img src={require("../../assets/images/home_icon.png")} alt="img" className="intro_after_featured_word" />
											<div className="intro_after_featured_word">
												<a href="#">become a model</a>
											</div>
										</div>
									</div>
								</div> 
							</div> 
						</div>
					</div>
				</section>
			</div>

			<section className="c-gutter-0 gallery-5 carousel-section ds container-px-0 z-6 transparent-bg overflow-visible s-pt-sm-50">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12 text-center">
							<div className="owl-carousel" data-margin="30" data-responsive-lg="5" data-responsive-md="4" data-responsive-sm="3" data-responsive-xs="1" data-nav="" data-loop="true" data-autoplay="true">
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_17.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">chloe</div>
											<div className="subtitle">nelson</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_12.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">megan</div>
											<div className="subtitle">duong</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_18.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">amy</div>
											<div className="subtitle">anderson</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_20.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">rachel</div>
											<div className="subtitle">anthony</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_19.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">elena</div>
											<div className="subtitle">murray</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_2.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Afyna</div>
											<div className="subtitle">Cannon</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_3.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Erica</div>
											<div className="subtitle">Peters</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_4.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Evelyn</div>
											<div className="subtitle">Plumb</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_5.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Beatriz</div>
											<div className="subtitle">Lanning</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_6.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Patricia</div>
											<div className="subtitle">Bellomy</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_7.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Lauri</div>
											<div className="subtitle">Pena</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_8.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Maria</div>
											<div className="subtitle">Willis</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media photoswipe-link h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_9.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Marla</div>
											<div className="subtitle">Walker</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_10.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Gloria</div>
											<div className="subtitle">Lopez</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_11.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">Faith</div>
											<div className="subtitle">Bayless</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="vertical-item item-gallery content-absolute text-center ds">
									<a href="personal-modal-page.html" className="item-media  h-100 w-100 d-block" data-width="1080" data-height="1520">
										<img src={require("../../assets/images/gallery/model_1.jpg")} alt="img" />
										<div className="media-links"></div>
									</a>
									<div className="item-content">
										<div className="item-title">
											<div className="title">leslie</div>
											<div className="subtitle">Ball</div>
										</div>
										<ul className="model-data">
											<li>
												<span className="title">height</span>
												<span className="data">183</span>
											</li>
											<li>
												<span className="title">weight</span>
												<span className="data">51</span>
											</li>
											<li>
												<span className="title">age</span>
												<span className="data">21</span>
											</li>
											<li>
												<span className="title">eyes</span>
												<span className="data">blue</span>
											</li>
											<li>
												<span className="title">hair</span>
												<span className="data">brown</span>
											</li>
											<li>
												<span className="title">dress</span>
												<span className="data">2.4</span>
											</li>
											<li>
												<span className="title">bust</span>
												<span className="data">78</span>
											</li>
											<li>
												<span className="title">waist</span>
												<span className="data">58</span>
											</li>
											<li>
												<span className="title">hips</span>
												<span className="data">86</span>
											</li>
											<li>
												<span className="title">shoe</span>
												<span className="data">7.5</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="ds hello-section s-pt-70 s-pb-115  s-pb-md-130 s-pb-lg-100 s-pt-lg-175 s-pb-xl-235 overflow-visible s-overlay s-mobile-overlay">
				<div className="container">
					<div className="fw-divider-space hidden-below-xxl pt-250"></div>
					<div className="fw-divider-space hidden-below-lg pt-130"></div>
					<div className="row justify-content-end">
						<div className="col-xs-12 col-lg-6">
							<h4 className="big-title">
								hello!
							</h4>
							<div className="fw-divider-space hidden-below-lg mt-45"></div>
							<p className="color-white font-main">
								Modelia, established in 1990, is one of the world's top model agencies, representing some of the fashion industry's most successful faces.
							</p>
							<p>
								A dedicated team of highly experienced professionals have enabled Modelia to sustain its success and dominate the fashion world for over three decades. We are one of the world's top model agencies, representing most successful faces.
							</p>
							<img src={require("../../assets/images/signature.png")} alt="signature" />
							<div className="fw-divider-space hidden-below-lg mt-65"></div>
							<div className="fw-divider-space hidden-above-lg mt-30"></div>
							<a href="contact.html" className="btn btn-outline-maincolor">become a model</a>
							<a href="casting.html" className="btn btn-maincolor">Schedule Casting</a>
						</div>
					</div>
					<div className="fw-divider-space hidden-below-lg mt-30"></div>
				</div>
			</section>

			<section id="become-model" className="become-model s-py-115 s-pt-md-80 s-pb-md-90 s-pt-xl-155 s-pb-xl-145">
				<div className="fw-divider-space hidden-below-md mt-65"></div>
				<div className="container ">
					<div className="row justify-content-center">
						<div className="col-xs-12 col-lg-8 text-center">
							<h5 className="subtitle">become</h5>
							<h4 className="title">our model</h4>
							<p>
								If you are 5ft 8in and above women and think you have what it takes to be a model send us headshot and full length shot along with all your parameters
							</p>
							<div className="widget widget_mailchimp pencil">
								<form className="signup" action="/">
									<label>
										<span className="screen-reader-text">Subscribe:</span>
									</label>

									<input id="mailchimp_email" name="email" type="email" className="form-control mailchimp_email" placeholder="Email address" />

									<button type="submit" className="search-submit">
										<span className="screen-reader-text">Subscribe</span>
									</button>
									<div className="response"></div>
								</form>

							</div>
						</div>
					</div>
				</div>
				<div className="fw-divider-space hidden-below-md pt-50"></div>
			</section>

			<section id="gallery" className="gallery-section gallery-6 bottom_mask_add overflow-visible ds s-pt-115 s-pb-70 s-pb-md-80 s-pt-md-135 s-pb-xl-155 s-pt-xl-205">
				<div className="container-fluid">
					<div className="row">
						<div className="fw-divider-space hidden-below-xl pt-70"></div>
						<div className="col-lg-12">
							<div className="row justify-content-center">
								<div className="col-md-10 col-xl-8">
									<div className="filters gallery-filters text-lg-right">
										<a href="#" data-filter="*" className="active selected">All</a>
										<a href="#" data-filter=".fashion">fashion</a>
										<a href="#" data-filter=".studio">studio</a>
										<a href="#" data-filter=".session">session</a>
									</div>
								</div>
							</div>
							<div className="fw-divider-space hidden-below-lg pt-10"></div>

							<div className="row isotope-wrapper masonry-layout c-gutter-30 c-mb-30 " data-animation="fadeInDown" data-filters=".gallery-filters">

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 fashion">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_1.jpg")} alt="img" />
											<div className="media-links"></div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">leslie</div>
												<div className="subtitle">Ball</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 studio session">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_2.jpg")} alt="img" />
											<div className="media-links"></div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Afyna</div>
												<div className="subtitle">Cannon</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 fashion session">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_3.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Erica</div>
												<div className="subtitle">peters</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 studio">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_4.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Evelyn</div>
												<div className="subtitle">Plumb</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 fashion">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_5.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Beatriz</div>
												<div className="subtitle">Lanning</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 studio session">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_6.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Patricia</div>
												<div className="subtitle">Bellomy</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 fashion">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_7.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Lauri</div>
												<div className="subtitle">Pena</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 studio session">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_8.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Maria</div>
												<div className="subtitle">Willis</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 fashion studio">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_9.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Marla</div>
												<div className="subtitle">Walker</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 fashion session">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_10.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Gloria</div>
												<div className="subtitle">Lopez</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 studio session">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_11.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Faith</div>
												<div className="subtitle">Bayless</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-lg-4 col-lgx-3 col-xl-2 fashion">
									<div className="vertical-item item-gallery content-absolute text-center ds">
										<a href="personal-modal-page.html" className="item-media h-100 w-100 d-block">
											<img src={require("../../assets/images/gallery/model_12.jpg")} alt="img" />
											<div className="media-links">
												<div className="links-wrap"></div>
											</div>
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">megan</div>
												<div className="subtitle">duong</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

							</div>

							<div className="row">
								<div className="fw-divider-space pt-20 hidden-above-lg"></div>
								<div className="col-12 text-center">
									<div className="btn btn-maincolor">all models</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="quote" className="blockquote-section s-parallax s-overlay ds s-pt-85 s-pb-140 s-pb-md-170 s-pb-lg-80 s-pt-md-70 s-pt-xl-200 s-pb-xl-190">
				<div className="container " data-animation="fadeIn">
					<div className="row">
						<div className="col-xs-12 col-lg-10 offset-lg-1">
							<div className="owl-carousel buttons-type home" data-loop="true" data-margin="0" data-nav="true" data-dots="false" data-themeclassname="entry-thumbnail-carousel" data-center="false" data-items="1" data-autoplay="false" data-responsive-xs="1" data-responsive-sm="1" data-responsive-md="1" data-responsive-lg="1">
								<div className="item text-center">
									<div className="entry-meta mt-0">
										<span className="byline">
											<span className="author d-flex flex-column align-items-center vcard">
												<img className="avatar mb-2 rounded-circle" src={require("../../assets/images/comment_2.jpg")} alt="img" />
												<span className="title">Wayne Fernandez</span>
												<a className="url fn n" href="blog-full.html">Photographer</a>
											</span>
										</span>
									</div>
									<div className="entry-content">
										<p className="quote">
											Truly one of my favorite agencies. Your talent is so great and your agency is so professional. It’s such a pleasure to come there! Thank you for being a company that I count on!
										</p>
									</div>
								</div>
								<div className="item text-center">
									<div className="entry-meta mt-0">
										<span className="byline">
											<span className="author d-flex flex-column align-items-center vcard">
												<img className="avatar mb-2 rounded-circle" src={require("../../assets/images/comment_1.jpg")} alt="img" />
												<span className="title">Pearl Hansen</span>
												<a className="url fn n" href="blog-full.html">National Model</a>
											</span>
										</span>
									</div>
									<div className="entry-content">
										<p className="quote">
											I started taking classNamees at models and ../../assets/images when I was 16 and they've worked to help me launch my career since the day I walked into their door. Much love for them!
										</p>
									</div>
								</div>
								<div className="item text-center">
									<div className="entry-meta mt-0">
										<span className="byline">
											<span className="author d-flex flex-column align-items-center vcard">
												<img className="avatar mb-2 rounded-circle" src={require("../../assets/images/comment_3.jpg")} alt="img" />
												<span className="title">Pearl Hansen</span>
												<a className="url fn n" href="blog-full.html">Manager</a>
											</span>
										</span>
									</div>
									<div className="entry-content">
										<p className="quote">
											uModels agency is a great place to go if you want to learn about the modeling industry, work with amazing people, and gain experience that will last a lifetime.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fw-divider-space hidden-below-lg pt-90"></div>
			</section>

			<section id="new-faces" className="faces-section gallery-1 ds top_mask_add overflow-visible item-gallery s-pt-80 s-pb-30 s-pb-md-70 s-pt-md-90 s-pb-xl-120 s-pt-xl-180">
				<div className="container">
					<div className="row">
						<div className="hidden-below-lg col-lg-4 " data-animation="fadeInLeft">
							<span className="color-main font-main fs-24 text-uppercase">modelia</span>
							<h2 className="mt-0 mb-40 text-uppercase">new faces</h2>
							<div className="model-slider-thumbs">
								<ul className="slides">
									<li>
										<img src={require("../../assets/images/gellery_rectengular/rec_model_5.jpg")} alt="img" width="120" height="120" />
										<div className="slide-wrap">
											<a href="personal-modal-page.html" className="name">Stacy Norris</a>
											<span className="age">22 years old,</span>
											<span className="address">New Yor</span>
										</div>
									</li>
									<li>
										<img src={require("../../assets/images/gellery_rectengular/rec_model_8.jpg")} alt="img" width="120" height="120" />
										<div className="slide-wrap">
											<a href="personal-modal-page.html" className="name">Cristina Kahler</a>
											<span className="age">20 years old,</span>
											<span className="address">Los Angeles</span>
										</div>
									</li>
									<li>
										<img src={require("../../assets/images/gellery_rectengular/rec_model_1.jpg")} alt="img" width="120" height="120" />
										<div className="slide-wrap">
											<a href="personal-modal-page.html" className="name">Faith Bayless</a>
											<span className="age">18 years old,</span>
											<span className="address">San Francisco</span>
										</div>
									</li>
									<li>
										<img src={require("../../assets/images/gellery_rectengular/rec_model_9.jpg")} alt="img" width="120" height="120" />
										<div className="slide-wrap">
											<a href="personal-modal-page.html" className="name">Alice Legere</a>
											<span className="age">21 years old,</span>
											<span className="address">San Diego</span>
										</div>
									</li>
									<li>
										<img src={require("../../assets/images/gellery_rectengular/rec_model_2.jpg")} alt="img" width="120" height="120" />
										<div className="slide-wrap">
											<a href="personal-modal-page.html" className="name">Patricia Bellomy</a>
											<span className="age">18 years old,</span>
											<span className="address">San Francisco</span>
										</div>
									</li>
									<li>
										<img src={require("../../assets/images/gellery_rectengular/rec_model_3.jpg")} alt="img" width="120" height="120" />
										<div className="slide-wrap">
											<a href="personal-modal-page.html" className="name">Megan Duong</a>
											<span className="age">21 years old,</span>
											<span className="address">San Diego</span>
										</div>
									</li>
									<li>
										<img src={require("../../assets/images/gellery_rectengular/rec_model_4.jpg")} alt="img" width="120" height="120" />
										<div className="slide-wrap">
											<a href="personal-modal-page.html" className="name">Afyna Cannon</a>
											<span className="age">21 years old,</span>
											<span className="address">San Diego</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xs-12 col-lg-8 " data-animation="fadeInRight">
							<div className="model-../../assets/images">
								<div className="model-figure">
									<div className="border-rad-5 position-relative">
										<a href="personal-modal-page.html" className="gradientdarken-background z-7-before">
											<img src={require("../../assets/images/gellery_rectengular/rec_model_5.jpg")} alt="img" data-caption="" data-large_image_width="555" data-large_image_height="555" />
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Stacy</div>
												<div className="subtitle">Norris</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="border-rad-5 position-relative">
										<a href="personal-modal-page.html" className="gradientdarken-background z-7-before">
											<img src={require("../../assets/images/gellery_rectengular/rec_model_8.jpg")} alt="img" data-caption="" data-large_image_width="555" data-large_image_height="555" />
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Cristina</div>
												<div className="subtitle">Kahler</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="border-rad-5 position-relative">
										<a href="personal-modal-page.html" className="gradientdarken-background z-7-before">
											<img src={require("../../assets/images/gellery_rectengular/rec_model_1.jpg")} alt="img" data-caption="" data-large_image_width="555" data-large_image_height="555" />
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Faith</div>
												<div className="subtitle">Bayless</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="border-rad-5 position-relative">
										<a href="personal-modal-page.html" className="gradientdarken-background z-7-before">
											<img src={require("../../assets/images/gellery_rectengular/rec_model_9.jpg")} alt="img" data-caption="" data-large_image_width="555" data-large_image_height="555" />
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Alice</div>
												<div className="subtitle">Legere</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="border-rad-5 position-relative">
										<a href="personal-modal-page.html" className="gradientdarken-background z-7-before">
											<img src={require("../../assets/images/gellery_rectengular/rec_model_2.jpg")} alt="img" data-caption="" data-large_image_width="555" data-large_image_height="555" />
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Patricia</div>
												<div className="subtitle">Bellomy</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="border-rad-5 position-relative ">
										<a href="personal-modal-page.html" className="gradientdarken-background z-7-before">
											<img src={require("../../assets/images/gellery_rectengular/rec_model_3.jpg")} alt="img" data-caption="" data-large_image_width="555" data-large_image_height="555" />
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">megan</div>
												<div className="subtitle">duong</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="border-rad-5 position-relative">
										<a href="personal-modal-page.html" className="gradientdarken-background z-7-before">
											<img src={require("../../assets/images/gellery_rectengular/rec_model_4.jpg")} alt="img" data-caption="" data-large_image_width="555" data-large_image_height="555" />
										</a>
										<div className="item-content">
											<div className="item-title">
												<div className="title">Afyna</div>
												<div className="subtitle">Cannon</div>
											</div>
											<ul className="model-data">
												<li>
													<span className="title">height</span>
													<span className="data">183</span>
												</li>
												<li>
													<span className="title">weight</span>
													<span className="data">51</span>
												</li>
												<li>
													<span className="title">age</span>
													<span className="data">21</span>
												</li>
												<li>
													<span className="title">eyes</span>
													<span className="data">blue</span>
												</li>
												<li>
													<span className="title">hair</span>
													<span className="data">brown</span>
												</li>
												<li>
													<span className="title">dress</span>
													<span className="data">2.4</span>
												</li>
												<li>
													<span className="title">bust</span>
													<span className="data">78</span>
												</li>
												<li>
													<span className="title">waist</span>
													<span className="data">58</span>
												</li>
												<li>
													<span className="title">hips</span>
													<span className="data">86</span>
												</li>
												<li>
													<span className="title">shoe</span>
													<span className="data">7.5</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="team" className="team-section ds s-pb-lg-100 bottom_mask_subtract">
				<div className="container">
					<div className="row">
						<div className="col-12 flex-column">
							<div className="team-slider-shortcode">
								<div className="team-slider-item active">
									<div className="team-profession">Talent Advisor</div>
									<div className="team-slider-image d fadeInLeft from-right">
										<img src={require("../../assets/images/team/team_1.png")} alt="team-slide" />
									</div>
									<div className="team-slider-name">
										<h3 className="slide-title">
											<span>Esther Sommers</span>
										</h3>
									</div>
									<p className="social-icons">
										<a href="#" className="fa fa-facebook color-bg-icon rounded" title="facebook"></a>
										<a href="#" className="fa fa-twitter color-bg-icon rounded" title="twitter"></a>
										<a href="#" className="fa fa-google color-bg-icon rounded" title="google"></a>
									</p>
								</div>
								<div className="team-slider-item">
									<div className="team-profession">Financial Executive</div>
									<div className="team-slider-image d fadeInRight from-left">
										<img src={require("../../assets/images/team/team_2.png")} alt="team-slide" />
									</div>
									<div className="team-slider-name">
										<h3 className="slide-title">
											<span>Bobbie McKeever</span>
										</h3>
									</div>
									<p className="social-icons">
										<a href="#" className="fa fa-facebook color-bg-icon rounded" title="facebook"></a>
										<a href="#" className="fa fa-twitter color-bg-icon rounded" title="twitter"></a>
										<a href="#" className="fa fa-google color-bg-icon rounded" title="google"></a>
									</p>
								</div>
								<div className="team-slider-item">
									<div className="team-profession">Event Manager</div>
									<div className="team-slider-image d fadeInLeft from-right">
										<img src={require("../../assets/images/team/team_3.png")} alt="team-slide" />
									</div>
									<div className="team-slider-name">
										<h3 className="slide-title">
											<span>Odis Fannin</span>
										</h3>
									</div>
									<p className="social-icons">
										<a href="#" className="fa fa-facebook color-bg-icon rounded" title="facebook"></a>
										<a href="#" className="fa fa-twitter color-bg-icon rounded" title="twitter"></a>
										<a href="#" className="fa fa-google color-bg-icon rounded" title="google"></a>
									</p>
								</div>
								<div className="team-slider-item">
									<div className="team-profession">Photographer</div>
									<div className="team-slider-image d fadeInRight from-left">
										<img src={require("../../assets/images/team/team_4.png")} alt="team-slide" />
									</div>
									<div className="team-slider-name">
										<h3 className="slide-title">
											<span>Lucy Harris</span>
										</h3>
									</div>
									<p className="social-icons">
										<a href="#" className="fa fa-facebook color-bg-icon rounded" title="facebook"></a>
										<a href="#" className="fa fa-twitter color-bg-icon rounded" title="twitter"></a>
										<a href="#" className="fa fa-google color-bg-icon rounded" title="google"></a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="card-section post overflow-visible">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12 text-center">
							<div className="owl-carousel" data-autoplay="true" data-margin="4" data-responsive-lg="" data-responsive-md="3" data-responsive-sm="2" data-responsive-xs="1" data-nav="" data-loop="true">
								<div className="item-content">
									<header className="entry-header">
										<a href="blog-single-left.html">
											<time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">September 1, 2018</time>
										</a>
									</header>
									<div className="entry-content">
										<h4 className="entry-title">
											<a href="blog-single-left.html">
												Renaissance Curls That Look Carved Out of Stone pick
											</a>
										</h4>
									</div>
									<div className="entry-meta">
										<span className="byline">
											<span className="author vcard d-flex flex-column align-items-center">
												<i className="fa fa-user"></i>
												<a className="url fn n" href="blog-single-left.html">By Admin</a>
											</span>
										</span>
									</div>
								</div>
								<div className="item-content">
									<header className="entry-header">
										<a href="blog-single-left.html">
											<time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">August 23, 2018</time>
										</a>
									</header>
									<div className="entry-content">
										<h4 className="entry-title">
											<a href="blog-single-left.html">
												POP drops heaps of covers, 10, to pick and choose
											</a>
										</h4>
									</div>
									<div className="entry-meta">
										<span className="byline">
											<span className="author vcard d-flex flex-column align-items-center">
												<i className="fa fa-user"></i>
												<a className="url fn n" href="blog-single-left.html">By Admin</a>
											</span>
										</span>
									</div>
								</div>
								<div className="item-content">
									<header className="entry-header">
										<a href="blog-single-left.html">
											<time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">August 18, 2018</time>
										</a>
									</header>
									<div className="entry-content">
										<h4 className="entry-title">
											<a href="blog-single-left.html">
												New girls Premier London is ready to launch this tasks
											</a>
										</h4>
									</div>
									<div className="entry-meta">
										<span className="byline">
											<span className="author vcard d-flex flex-column align-items-center">
												<i className="fa fa-user"></i>
												<a className="url fn n" href="blog-single-left.html">By Admin</a>
											</span>
										</span>
									</div>
								</div>
								<div className="item-content">
									<header className="entry-header">
										<a href="blog-single-left.html">
											<time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">August 09, 2018</time>
										</a>
									</header>
									<div className="entry-content">
										<h4 className="entry-title">
											<a href="blog-single-left.html">
												WSJ Asks What Makes a 'Perfect Ten' is ready Premier
											</a>
										</h4>
									</div>
									<div className="entry-meta">
										<span className="byline">
											<span className="author vcard d-flex flex-column align-items-center">
												<i className="fa fa-user"></i>
												<a className="url fn n" href="blog-single-left.html">By Admin</a>
											</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="map" className="ds ms page_map top_mask_subtract" data-draggable="false" data-scrollwheel="false">
				<div className="marker">
					<div className="marker-address">USA, 301 S Christopher Columbus Blvd, Philadelphia, PA 19106</div>
					<div className="marker-description">
						<span>
							316 Tipple Road Philadelphia, PA 19143
						</span>
					</div>

					<img className="marker-icon" src={require("../../assets/images/map_marker_icon.png")} alt="img" />
				</div>
			</section>

			<section id="contacts" className="contacts-section top_mask_add ds overflow-visible background-contact s-pt-70 s-pb-60 s-pt-md-95 s-pb-md-80 s-pt-xl-170 s-pb-xl-140 c-gutter-30">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-xl-4 " data-animation="scaleAppear">
							<span className="color-main fs-24 font-main text-uppercase">modelia</span>
							<h2 className="mt-0 mb-40 contact-title text-uppercase">Contact us</h2>
							<div className="media mb-20">
								<h5 className="fs-20 mb-0 min-w-100">Phone:</h5>
								<div className="media-body ml-0 d-flex flex-column">
									<span>(800) 123-45-67</span>
									<span>(800) 123-45-68</span>
								</div>
							</div>
							<div className="media mb-20">
								<h5 className="fs-20 mb-0 min-w-100">Email:</h5>
								<div className="media-body ml-0 d-flex flex-column">
									<span>modelia@example.com</span>
								</div>
							</div>
							<div className="media mb-20">
								<h5 className="fs-20 mb-0 min-w-100">Address:</h5>
								<div className="media-body pr-lg-4 ml-0 d-flex flex-column">
									<span>316 Tipple Road Philadelphia, PA 19143</span>
								</div>
							</div>
						</div>
						<div className="fw-divider-space hidden-above-lg mt-20"></div>
						<div className="col-lg-7 col-xl-8 " data-animation="scaleAppear">
							<form className="contact-form c-mb-20 c-gutter-20" method="post" action="/">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<input type="text" name="name" className="form-control" placeholder="full name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<input type="email" name="email" className="form-control" placeholder="email address" />
										</div>
									</div>

								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<input type="tel" name="phone" className="form-control" placeholder="phone number" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<input type="text" name="city" className="form-control" placeholder="your city" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<div className="form-group">
											<textarea rows="6" cols="45" name="message" className="form-control" placeholder="your message"></textarea>
											<button type="submit" className="btn-submit"><i className="fa fa-paper-plane"></i></button>
										</div>
									</div>

								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<section className="ds background-contact s-pt-20 s-pb-60 s-pb-md-90 s-pb-xl-150 c-mb-30">
				<div className="fw-divider-space hidden-below-xl mt-40"></div>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-lg-6">
							<a href="#" className="banner">
								<div className="banner__img cover-image s-overlay">
									<img src={require("../../assets/images/btn-image_1.jpg")} alt="img" />
								</div>
								<div className="banner__content">
									<h4 className="banner__title">
										Become a Model
									</h4>
									<div className="banner__text">
										Know More
									</div>
								</div>
							</a>
						</div>
						<div className="col-xs-12 col-lg-6">
							<a href="#" className="banner">
								<div className="banner__img cover-image s-overlay">
									<img src={require("../../assets/images/btn-image_2.jpg")} alt="img" />
								</div>
								<div className="banner__content">
									<h4 className="banner__title color-black">
										Model Courses
									</h4>
									<div className="banner__text">
										Know More
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="fw-divider-space hidden-below-xl mt-50"></div>
			</section>

			<footer className="page_footer ds top_mask_add s-pb-10 s-pt-70 s-pb-md-40 s-pt-md-85 s-pb-xl-140 s-pt-xl-145">
				<div className="container">
					<div className="row">
						<div className="divider-20 d-none d-xl-block"></div>

						<div className="col-12 text-center " data-animation="fadeInUp">

							<div className="widget widget_social_buttons">
								<a href="#" className="fa fa-facebook color-bg-icon rounded" title="facebook"></a>
								<a href="#" className="fa fa-twitter color-bg-icon rounded" title="twitter"></a>
								<a href="#" className="fa fa-google color-bg-icon rounded" title="google"></a>
							</div>

							<div className="widget logo">
								<img src={require("../../assets/images/logo.png")} alt="img" />
							</div>

							<div className="widget copyright">
								<p>&copy; Copyright <span className="copyright_year">2018</span> All Rights Reserved</p>
							</div>
						</div>

					</div>
				</div>
			</footer>


		</div>
	</div>
    </div>
  );
}

export default Home;
