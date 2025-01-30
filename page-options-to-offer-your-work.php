<?php get_header();
?><main>
    <div class="two-thirds-screen">
        <div class="banner"><h1 class="centered-text banner-heading-30">Options to Offer Your Work</h1></div>
        <div>
            <div class="padding-x-60 padding-t-20">
                <p class="centered-text">Are you an author? A creative individual with services to offer?</p>
                <p class="centered-text">We invite you to offer your work(s) through Trunk of My Car Cooperative, whether you're interested in joining the cooperative or not.</p>
                <p class="centered-text">(But we hope you'll consider joining!)</p>
            </div>
            <p class="centered-text padding-x-60">Learn about the differences between operating as a creator-member and as a vendor below.</p>
            <div class="fit-content margin-auto-block">
                <table class="tomc-blue-purple-table">
                    <tr>
                        <th class="tomc-blue-cells">Creator-Members</th>
                        <th class="tomc-purple-cells">Vendors</th>
                    </tr>
                    <tr>
                        <td class="tomc-lighter-cells">Earn 90% royalties on book sales*</td>
                        <td class="tomc-lighter-cells">Earn 80% royalties on book sales*</td>
                    </tr>
                    <tr>
                        <td>2.5% fee on Service Offerings*</td>
                        <td>5% fee on Service Offerings*</td>
                    </tr>
                    <tr>
                        <td class="tomc-lighter-cells">Eligible for year-end patronage, when available</td>
                        <td class="tomc-lighter-cells">-</td>
                    </tr>
                    <tr>
                        <td>Enjoy discounts on products and services</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td class="tomc-lighter-cells">Vote in co-op elections</td>
                        <td class="tomc-lighter-cells">-</td>
                    </tr>
                    <tr>
                        <td>Pay dues of $10 monthly</td>
                        <td>Pay nothing out of pocket</td>
                    </tr>
                </table>
                <p>*Exclusive of Stripe transaction fees, currently at 30cents + 2.9%.</p>
            </div>
            <?php if (is_user_logged_in()){
                $user = wp_get_current_user();
                if (in_array( 'creator-member', (array) $user->roles )){
                    ?><p class="padding-x-20 centered-text"><em>Thank you for being a Creator-Member.</em></p>
                <?php } else if (in_array( 'dc_vendor', (array) $user->roles )){
                    ?><p class="padding-x-20 centered-text"><em>You are currently a vendor.</em></p>
                    <a href="<?php echo esc_url(site_url('/creators-circle-membership'));?>"><button class="blue-button">Join as a Creator-Member</button></a>
                <?php } else {
                    ?><a href="<?php echo esc_url(site_url('/creators-circle-membership'));?>"><button class="blue-button">Join as a Creator-Member</button></a>
                    <button class="purple-button" id="sell-as-vendor-button">Offer work without a membership</button>
                <?php }
            } else {
                ?><p class="padding-x-20 centered-text">Before you can become a vendor or Creator-Member, you must <a href="<?php echo esc_url(site_url('/my-account'));?>">login</a>.</p>
            <?php }
        ?></div>
        <br>
        <br>
        <br>
        <br>
        <div class="tomc-road-text">
            <div class="tomc-road-text--top">
                <p class="centered-text">Learn how to list your work</p>
            </div>
            <div class="tomc-road-text--bottom">
                <p class="centered-text">with our <a href="<?php echo esc_url(site_url('/creator-roadmap')); ?>" class="white-link">Creator Roadmap</a>.</p>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>