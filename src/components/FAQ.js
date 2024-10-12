import React, { useEffect } from "react";

const FAQ = () => {
	useEffect(() => {
		document.querySelectorAll(".faq-item h3").forEach((item) => {
			item.addEventListener("click", () => {
				const answer = item.nextElementSibling;
				answer.classList.toggle("open");
			});
		});

		// Chọn tất cả các mục FAQ
		const faqItems = document.querySelectorAll(".faq-item");
		faqItems.forEach((item) => {
			item.querySelector(".faq-question").addEventListener("click", () => {
				item.classList.toggle("open");
				const toggleBtn = item.querySelector(".toggle-btn");
				if (item.classList.contains("open")) {
					toggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <g clip-path="url(#clip0_1_753)">
                <path d="M4.25 12H20.75" stroke="#006AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1_753">
                  <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>
          `;
				} else {
					toggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <g clip-path="url(#clip0_1_768)">
                <path d="M4.25 12H20.75" stroke="#006AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 3.75V20.25" stroke="#006AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1_768">
                  <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>
          `;
				}
			});
		});
	});

	return (
		<>
			<section class="faq">
				<div class="text">
					<div class="subtext">
						<div class="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="19"
								height="18"
								viewBox="0 0 19 18"
								fill="none"
							>
								<path
									d="M9.49985 0.75L14 8.25H5L9.49985 0.75ZM10.25 10.125H16.25V16.125H10.25V10.125ZM5.5625 16.5C7.53001 16.5 9.125 14.9051 9.125 12.9375C9.125 10.9699 7.53001 9.375 5.5625 9.375C3.59499 9.375 2 10.9699 2 12.9375C2 14.9051 3.59499 16.5 5.5625 16.5Z"
									fill="white"
								/>
							</svg>
						</div>

						<span>FAQ</span>
					</div>
					<h2>Những câu hỏi thường gặp</h2>
				</div>

				<div class="faq-container">
					<div class="faq-item">
						<div class="faq-question">
							<span>Quy trình làm việc của 3D Motion Lab như thế nào?</span>
							<span class="toggle-btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
								>
									<g clip-path="url(#clip0_1_760)">
										<path
											d="M4.25 12H20.75"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M12.5 3.75V20.25"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1_760">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(0.5)"
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
						</div>
						<div class="faq-answer">
							<p>
								Để đạt được kết quả tối ưu nhất khi làm việc, chúng tôi luôn
								tuân thủ chặt chẽ quy trình làm việc sau đây:
								<ul>
									<li>
										Tiếp nhận thông tin: Thông nhất về dữ liệu, yêu cầu công
										việc từ phía khách hàng, đưa ra các tư vấn về giải pháp,
									</li>
									<li>
										Bắt đầu quy trình sản xuất: Sản xuất và thiết kế theo yêu
										cầu của khách hàng, thường xuyên trao đổi với khách hàng để
										không lạc hướng.
									</li>
									<li>Kiểm thử: Kiểm thử, sửa lỗi nếu có trước khi bàn giao</li>
									<li>Đóng gói và bàn giao sản phẩm</li>
									<li>Nghiệm thu</li>
								</ul>
							</p>
						</div>
					</div>

					<div class="faq-item">
						<div class="faq-question">
							<span>
								Thời gian hoàn thành một dự án của "3D Motion Lab" là bao lâu?
							</span>
							<span class="toggle-btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
								>
									<g clip-path="url(#clip0_1_760)">
										<path
											d="M4.25 12H20.75"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M12.5 3.75V20.25"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1_760">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(0.5)"
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
						</div>
						<div class="faq-answer">
							<p>
								Thời gian hoàn thành một dự án còn phụ thuộc vào quy mô, độ phức
								tạp của dự án và và sự tương tác, phản hồi giữa hai bên trong
								suốt quá trình triển khai. Tuy nhiên, thông thường, chúng tôi sẽ
								cung cấp lịch trình rõ ràng sau khi thảo luận chi tiết về yêu
								cầu của khách hàng.
							</p>
						</div>
					</div>

					<div class="faq-item">
						<div class="faq-question">
							<span>
								Chi phí cho các dịch vụ của 3D Motion Lab là bao nhiêu?
							</span>
							<span class="toggle-btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
								>
									<g clip-path="url(#clip0_1_760)">
										<path
											d="M4.25 12H20.75"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M12.5 3.75V20.25"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1_760">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(0.5)"
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
						</div>
						<div class="faq-answer">
							<p>
								Chi phí cho các dịch vụ tại 3D Motion Lab sẽ thay đổi tùy thuộc
								vào nhiều yếu tố khác nhau, bao gồm quy mô, mức độ phức tạp của
								dự án, yêu cầu cụ thể từ phía khách hàng và thời gian hoàn thành
								dự án. Chúng tôi cam kết cung cấp một mức giá hợp lý, phản ánh
								chất lượng và giá trị mà sản phẩm mang lại. Quý khách vui lòng
								liên hệ với chúng tôi để được báo giá chi tiết.
							</p>
						</div>
					</div>

					<div class="faq-item">
						<div class="faq-question">
							<span>
								3D Motion Lab có hỗ trợ khách hàng sau khi hoàn thành dự án
								không?
							</span>
							<span class="toggle-btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
								>
									<g clip-path="url(#clip0_1_760)">
										<path
											d="M4.25 12H20.75"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M12.5 3.75V20.25"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1_760">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(0.5)"
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
						</div>
						<div class="faq-answer">
							<p>
								Có. Chúng tôi cam kết cung cấp dịch vụ hậu mãi và hỗ trợ khách
								hàng sau khi dự án hoàn thành để đảm bảo sản phẩm hoạt động ổn
								định và mang lại hiệu quả tốt nhất.
							</p>
						</div>
					</div>

					<div class="faq-item">
						<div class="faq-question">
							<span>
								Khách hàng nên chuẩn bị gì trước khi bắt đầu dự án với 3D Motion
								Lab?
							</span>
							<span class="toggle-btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
								>
									<g clip-path="url(#clip0_1_760)">
										<path
											d="M4.25 12H20.75"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M12.5 3.75V20.25"
											stroke="#006AFF"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1_760">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(0.5)"
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
						</div>
						<div class="faq-answer">
							<p>
								Để đảm bảo quá trình hợp tác diễn ra thuận lợi và đạt kết quả
								tốt nhất, khách hàng nên chuẩn bị ý tưởng, một số tài liệu và
								thông tin liên quan trước khi bắt đầu dự án với 3D Motion Lab.
								Sự chuẩn bị này giúp chúng tôi hiểu rõ nhu cầu, mong muốn và tầm
								nhìn của khách hàng, từ đó đưa ra những giải pháp phù hợp và
								hiệu quả nhất.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FAQ;
